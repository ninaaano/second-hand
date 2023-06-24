//
//  MyAccountViewController.swift
//  Daangn
//
//  Created by ilim on 2023/06/13.
//

import UIKit

import AuthenticationServices
import JWTDecode

final class MyAccountViewController: UIViewController {
    private let manager = NetworkManager()
    
    private let border = BorderLine(height: 1)
    
    private let loginButton = LoginButton(status: .login)
    
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
        
        view.addSubview(loginButton)
        NSLayoutConstraint.activate([
            loginButton.centerYAnchor.constraint(equalTo: view.safeAreaLayoutGuide.centerYAnchor),
            loginButton.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor, constant: 16),
            loginButton.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: -16),
        ])
    }
    
    private func setButtons() {
        loginButton.addTarget(nil, action: #selector(loginWithGithub), for: .touchUpInside)
    }
}

extension MyAccountViewController {
    @objc func selectPhoto() {
        let vc = UIViewController()
        let navi = UINavigationController(rootViewController: vc)
        navi.view.backgroundColor = .systemBackground
        self.present(navi, animated: true)
    }
    
    @objc func loginWithGithub() {
        let clientID = "Iv1.b4d6fbb2a8c02670"
        let scheme = "daangn"
        
        let githubAuthURLString = "https://github.com/login/oauth/authorize?client_id=\(clientID)"
        guard let githubAuthURL = URL(string: githubAuthURLString) else { return }
        let session = ASWebAuthenticationSession(
            url: githubAuthURL,
            callbackURLScheme: scheme
        ) { [weak self] callbackURL, error in
            if let error {
#if DEBUG
                print(error)
#endif
                return
            }
            guard let callbackURL else {
#if DEBUG
                print("no callback URL")
#endif
                return
            }
            
            let queryItems = URLComponents(string: callbackURL.absoluteString)?.queryItems
            let authCode = queryItems?.first { $0.name == "code" }?.value
            
            guard let authCode else {
#if DEBUG
                print("no auth code")
#endif
                return
            }
            
#if DEBUG
            print(authCode)
#endif
            
            Task { [weak self] in
                guard let self else { return }
                do {
                    let jwt = try await self.manager.requestJWT(with: authCode)
                    switch jwt.kind {
                        
                    case .final:
                        await MainActor.run {
#if DEBUG
                            print(jwt.value)
#endif
                        }
                    case .temp:
                        let tempInfo = SignUpTempInfo(jwt: jwt)
                        let signupViewController = CreateAccountViewController(tempInfo: tempInfo)
                        let navigationController = UINavigationController(rootViewController: signupViewController)
                        navigationController.view.backgroundColor = .systemBackground
                        self.present(navigationController, animated: true)
                    }
                } catch {
#if DEBUG
                    print("no auth code")
#endif
                }
            }
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
