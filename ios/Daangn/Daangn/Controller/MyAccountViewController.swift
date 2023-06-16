//
//  MyAccountViewController.swift
//  Daangn
//
//  Created by ilim on 2023/06/13.
//

import UIKit

final class MyAccountViewController: UIViewController {
    private let border = Boarder()
    
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
}
