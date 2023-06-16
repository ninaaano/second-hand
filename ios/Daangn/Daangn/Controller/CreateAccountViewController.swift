//
//  CreateAccountViewController.swift
//  Daangn
//
//  Created by Effie on 2023/06/16.
//

import UIKit

final class CreateAccountViewController: UIViewController {
    private let border = Boarder()
    
    private let profileImageButton = ProfileImageButton()
    
    private let idField = IDField()
    
    private let townButton = TownButton()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setNavigationItem()
        setProfileButton()
        setLayout()
    }
    
    private func setNavigationItem() {
        self.title = "회원가입"
        self.navigationItem.leftBarButtonItem = .init(
            title: "닫기",
            style: .plain,
            target: self,
            action: #selector(dismissViewController)
        )
        
        self.navigationItem.rightBarButtonItem = .init(
            title: "완료",
            style: .done,
            target: self,
            action: #selector(save)
        )
    }
    
    private func setProfileButton() {
        profileImageButton.setAction(target: self, #selector(selectPhoto))
    }
    
    private func setLayout() {
        view.addSubview(border)
        NSLayoutConstraint.activate([
            border.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            border.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            border.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
        ])
        
        view.addSubview(profileImageButton)
        NSLayoutConstraint.activate([
            profileImageButton.centerXAnchor.constraint(equalTo: view.safeAreaLayoutGuide.centerXAnchor),
            profileImageButton.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 80),
        ])
        
        view.addSubview(idField)
        NSLayoutConstraint.activate([
            idField.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            idField.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            idField.topAnchor.constraint(equalTo: profileImageButton.bottomAnchor, constant: 24),
        ])
        
        view.addSubview(townButton)
        NSLayoutConstraint.activate([
            townButton.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor, constant: 16),
            townButton.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: -16),
            townButton.topAnchor.constraint(equalTo: idField.bottomAnchor, constant: 40),
        ])
    }
    
    @objc func dismissViewController() {
        self.dismiss(animated: true)
    }
    
    @objc func save() {
        // TODO: 선택 위치 저장 로직 구현
        self.dismiss(animated: true) {
            
        }
    }
    
    @objc func selectPhoto() {
        let vc = UIViewController()
        let navi = UINavigationController(rootViewController: vc)
        navi.view.backgroundColor = .systemBackground
        self.present(navi, animated: true)
    }
}
