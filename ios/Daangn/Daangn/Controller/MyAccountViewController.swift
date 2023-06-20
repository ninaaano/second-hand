//
//  MyAccountViewController.swift
//  Daangn
//
//  Created by ilim on 2023/06/13.
//

import UIKit
import AuthenticationServices

final class MyAccountViewController: UIViewController {
    private let border = BorderLine(height: 1)
    
    private let profileImageButton = ProfileImageButton()
    
    private let idField = IDField()
    
    private let loginButton = LoginButton()
    
    private let joinButton: UIButton = {
        let button = UIButton(frame: .zero)
        button.setTitle("회원가입", for: .normal)
        button.setTitleColor(ColorStyle.black, for: .normal)
        button.translatesAutoresizingMaskIntoConstraints = false
        button.setContentHuggingPriority(.required, for: .horizontal)
        button.setContentHuggingPriority(.required, for: .vertical)
        return button
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        title = "내 계정"
        view.backgroundColor = ColorStyle.white
        setLayout()
        setButtons()
    }
    
    private func setLayout() {
        view.addSubview(border)
        NSLayoutConstraint.activate([
            border.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            border.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            border.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
        ])
        
        view.addSubview(idField)
        NSLayoutConstraint.activate([
            idField.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            idField.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 200),
            idField.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            idField.trailingAnchor.constraint(equalTo: view.trailingAnchor),
        ])
        
        view.addSubview(loginButton)
        NSLayoutConstraint.activate([
            loginButton.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor, constant: -120),
            loginButton.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
            loginButton.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16),
        ])
        
        view.addSubview(joinButton)
        NSLayoutConstraint.activate([
            joinButton.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            joinButton.topAnchor.constraint(equalTo: loginButton.bottomAnchor, constant: 19),
        ])
    }
    
    private func setButtons() {
        profileImageButton.setAction(target: nil, #selector(selectPhoto))
        loginButton.addTarget(nil, action: #selector(loginWithGithub), for: .touchUpInside)
        joinButton.addTarget(nil, action: #selector(createAccount), for: .touchUpInside)
    }
    
    @objc func selectPhoto() {
        let vc = UIViewController()
        let navi = UINavigationController(rootViewController: vc)
        navi.view.backgroundColor = .systemBackground
        self.present(navi, animated: true)
    }
    
    @objc func createAccount() {
        let createViewController = CreateAccountViewController()
        let navigationController = UINavigationController(rootViewController: createViewController)
        navigationController.view.backgroundColor = .systemBackground
        self.present(navigationController, animated: true)
    }
    
    @objc func loginWithGithub() {
        let clientID = "d3c9483c73b93a1a9267"
        let scheme = "daangn-ios"
        
        let githubAuthURLString = "https://github.com/login/oauth/authorize?client_id=\(clientID)"
        guard let githubAuthURL = URL(string: githubAuthURLString) else { return }
        let session = ASWebAuthenticationSession(
            url: githubAuthURL,
            callbackURLScheme: scheme
        ) { callbackURL, error in
            if let error {
                print(error)
                return
            }
            guard let callbackURL else {
                print("no callback URL")
                return
            }
            
            let queryItems = URLComponents(string: callbackURL.absoluteString)?.queryItems
            let authCode = queryItems?.first { $0.name == "code" }?.value
            
            guard let authCode else {
                print("no auth code")
                return
            }
            
            NetworkManager().getTempJWT(with: authCode) { token in print(token) }
        }
        
        session.presentationContextProvider = self
        session.start()
    }
}

extension MyAccountViewController: ASWebAuthenticationPresentationContextProviding {
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        guard let window = view.window else {
            fatalError("No window found in view")
        }
        return window
    }
}

// MARK: NetworkManager

enum NetworkError: Error {
    case noResponse
    case invalidData
    case failToPost
    case failToDelete
    case someError
}


typealias RequestParameters = [String: String]

final class NetworkManager {
    static let dummyURLString = "https://example.com"
    static let defaultPagingOffSet = 10
    
    private let baseURL = "http://3.38.73.117:8080"
    
    private let session: URLSession
    
    init(session: URLSession = URLSession.shared) {
        self.session = session
    }
    
    private func decodeJson<T: Decodable>(type: T.Type, fromJson data: Data) -> T? {
        var result: T? = nil
        do {
            result = try JSONDecoder().decode(type, from: data)
        } catch {
            // TODO: failToParse 에러 핸들링
            print("fail to parse \(String(describing: type.self))")
            print(error)
        }
        return result
    }
    
    private func encodeJson<T: Encodable>(data: T) -> Data? {
        var json: Data? = nil
        do {
            json = try JSONEncoder().encode(data)
        } catch {
            // TODO: failToEncode 에러 핸들링
            print("fail to encode \(String(describing: data))")
            print(error)
        }
        return json
    }
    
    private func getData<T: Decodable>(
        for urlString: String,
        with query: [String: String]? = nil,
        dataType: T.Type,
        completion: @escaping (Result<T, Error>) -> Void)
    {
        let url: URL?
        if let query {
            guard var urlcomponent = URLComponents(string: urlString) else { return }
            let queryItems = query.map { item in URLQueryItem(name: item.key, value: item.value) }
            urlcomponent.queryItems = queryItems
            url = urlcomponent.url
        } else {
            url = URL(string: urlString)
        }
        guard let url else { return }
        var request = URLRequest(url: url)
        print(request.url)
        request.timeoutInterval = 15
        
        let completionHandler = { @Sendable [weak self] (data: Data?, response: URLResponse?, error: Error?) in
            if let error {
                completion(.failure(error))
                return
            }
            
            guard let response = response as? HTTPURLResponse else {
                print("not http response")
                print(error)
                return
            }
            
            print(response.statusCode)
            
            guard (200..<400) ~= response.statusCode else {
                completion(.failure(NetworkError.noResponse))
                dump(response)
                return
            }
            
            guard let data else {
                completion(.failure(NetworkError.invalidData))
                return
            }
            
            guard let newData = self?.decodeJson(type: dataType, fromJson: data) else { return }
            completion(.success(newData))
        }
        
        let dataTask = session.dataTask(with: request, completionHandler: completionHandler)
        dataTask.resume()
    }
    
    private func authorizedGET<T: Decodable>(
        for urlString: String,
        with query: [String: String]? = nil,
        dataType: T.Type,
        completion: @escaping (Result<T, Error>) -> Void)
    {
        let absoulte = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJoeXVuIiwiaWF0IjoxNjg3MDU0ODIxLCJleHAiOjE2ODk2NDY4MjEsInVzZXJJZCI6NCwiYXZhdGFyIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzkxNTI1NDkyP3Y9NCIsInVzZXJuYW1lIjoiZ2hrZGd1czI5IiwicHJpbWFyeUxvY2F0aW9uIjp7ImxvY2F0aW9uSWQiOjEsImRpc3RyaWN0Ijoi7ISc7Jq47IucIiwiY2l0eSI6IuqwleuCqOq1rCIsInRvd24iOiLsl63sgrwx64-ZIn0sInNlY29uZGFyeUxvY2F0aW9uIjp7ImxvY2F0aW9uSWQiOjUsImRpc3RyaWN0Ijoi7ISc7Jq47IucIiwiY2l0eSI6IuqwleuCqOq1rCIsInRvd24iOiLssq3ri7Trj5kifX0.l4gch92HdNt53nPXWHNjRmj-hFANH5P--TQwczozrT4"
        getData(
            for: urlString,
            with: ["Authorization": "Bearer \(absoulte)"],
            dataType: dataType,
            completion: completion
        )
    }
}

// MARK: - Util

extension NetworkManager {
    func getTempJWT(
        with code: String,
        completion: @escaping (String?) -> Void
    ) {
        let url = baseURL + "/login"
        var query: RequestParameters = [:]
        query.updateValue(code, forKey: "code")
        
        getData(for: url, with: query, dataType: String?.self) { result in
            switch result {
            case .success(let token):
                completion(token)
            case .failure(let error):
                print(error)
            }
        }
    }
}
