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
    
    override func viewDidLoad() {
        super.viewDidLoad()
        title = "내 계정"
        view.backgroundColor = ColorStyle.white
        setLayout()
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
    }
    
    private func setPhotoButton() {
        profileImageButton.setAction(target: nil, #selector(selectPhoto))
    }
    
    @objc func selectPhoto() {
        let vc = UIViewController()
        let navi = UINavigationController(rootViewController: vc)
        navi.view.backgroundColor = .systemBackground
        self.present(navi, animated: true)
    }
}
