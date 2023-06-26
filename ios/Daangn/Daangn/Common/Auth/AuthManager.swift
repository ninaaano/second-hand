//
//  AuthManager.swift
//  Daangn
//
//  Created by Effie on 2023/06/24.
//

import Foundation

class AuthManager {
    enum Notifications {
        static let loginSuccessed = Notification.Name("login.successed")
        static let logout = Notification.Name("logout")
    }
    
    private let authKey = "Daangn-jwt-key"
    
    private var networkManager: NetworkManager
    
    var token: JWToken? {
        get {
            guard let tokenValue = KeychainManager.load(key: authKey) else {
                return nil
            }
            return JWToken(kind: .final, value: tokenValue)
        }
        set {
            if let newValue {
                KeychainManager.save(key: authKey, data: newValue.value)
            } else {
                KeychainManager.delete(key: authKey)
            }
        }
    }
    
    init(networkManager: NetworkManager = NetworkManager()) {
        self.networkManager = networkManager
    }
    
    func saveToken(_ token: JWToken) {
        KeychainManager.save(key: authKey, data: token.value)
        postLoginSuccessNotification()
    }
    
    func logout() {
        KeychainManager.delete(key: authKey)
        postLogoutNotification()
    }
    
    func getLoginResult() async -> LoginResult {
        let networkManager = NetworkManager()
        var result: LoginResult
        if let token = AuthManager().token {
            do {
                let isValidate = try await networkManager.validateJWT(token)
                result = isValidate ? LoginResult.logined : LoginResult.loginNeeded
            } catch {
                print(error)
                result = .loginNeeded
            }
        } else {
            result = .loginNeeded
        }
        return result
    }
}

extension AuthManager {
    private func postLoginSuccessNotification() {
        NotificationCenter.default.post(
            Notification(name: Self.Notifications.loginSuccessed, object: nil)
        )
    }
    
    private func postLogoutNotification() {
        NotificationCenter.default.post(
            Notification(name: Self.Notifications.logout, object: nil)
        )
    }
}
