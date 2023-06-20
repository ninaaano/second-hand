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
        let githubAuthURLString = "https://github.com/login/oauth/authorize?client_id=d3c9483c73b93a1a9267"
        guard let githubAuthURL = URL(string: githubAuthURLString) else { return }
        let scheme = "daangn-ios"
        let session = ASWebAuthenticationSession(
            url: githubAuthURL,
            callbackURLScheme: scheme
        ) { callbackURL, error in
            guard error == nil, let callbackURL = callbackURL else { return }
            let queryItems = URLComponents(string: callbackURL.absoluteString)?.queryItems
            let authCode = queryItems?.first { $0.name == "code" }?.value
            print(authCode)
        }
        session.presentationContextProvider = self
        session.start()
    }
}

extension MyAccountViewController: ASWebAuthenticationPresentationContextProviding {
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        guard let window = view.window else {
            print("cannot")
            fatalError("No window found in view")
        }
        return window
    }
}


