//
//  SceneDelegate.swift
//  Daangn
//
//  Created by Effie on 2023/06/07.
//

import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    private class InitialViewController: UIViewController {
        override func viewDidLoad() {
            super.viewDidLoad()
            view.backgroundColor = .systemBackground
        }
    }
    
    var window: UIWindow?
    
    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = (scene as? UIWindowScene) else { return }
        window = UIWindow(windowScene: windowScene)
        window?.rootViewController = TabBarController()
//        window?.rootViewController = InitialViewController()
        window?.makeKeyAndVisible()
//        setRootViewController()
    }
    
    
    private func setRootViewController() {
//        AuthManager().logout()
        Task { [weak self] in
            let destination = await AuthManager().getDestination()
            await MainActor.run {
                switch destination {
                case .logined:
                    self?.window?.rootViewController = TabBarController()
                case .loginNeeded:
                    self?.window?.rootViewController = LoginViewController()
                }
            }
        }
    }
}
