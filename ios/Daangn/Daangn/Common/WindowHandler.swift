//
//  WindowHandler.swift
//  Daangn
//
//  Created by Effie on 2023/06/27.
//

import UIKit

class WindowHandler {
    private let window: UIWindow
    var loginResult: LoginResult = .loginNeeded {
        didSet {
            update()
        }
    }
    
    init(window: UIWindow) {
        self.window = window
        addObserver()
    }
    
    private func update() {
        let destinationViewController: UIViewController
        switch loginResult {
        case .loginNeeded:
            destinationViewController = LoginViewController()
        case .logined:
            destinationViewController = TabBarController()
        }
        
        UIView.transition(
            with: window,
            duration: 0.25,
            options: [.transitionCrossDissolve]
        ) { [weak self] in
            guard let self else { return }
            self.window.rootViewController = destinationViewController
        }
    }
    
    private func addObserver() {
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(updateToLoggedIn),
            name: AuthManager.Notifications.loginSuccessed,
            object: nil
        )
    }
    
    @objc func updateToLoggedIn() {
        loginResult = .logined
    }
}
