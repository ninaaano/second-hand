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
        
        view.addSubview(profileImageButton)
        NSLayoutConstraint.activate([
            profileImageButton.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            profileImageButton.centerYAnchor.constraint(equalTo: view.centerYAnchor),
        ])
        
        view.addSubview(idField)
        NSLayoutConstraint.activate([
            idField.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            idField.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            idField.topAnchor.constraint(equalTo: profileImageButton.bottomAnchor, constant: 40),
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
