//
//  ConfigureTown.swift
//  Daangn
//
//  Created by ilim on 2023/06/14.
//

import UIKit

final class ConfigureTown: UIViewController {
    private let navigationBar: UINavigationBar = {
        let navigationBar = UINavigationBar()
        navigationBar.translatesAutoresizingMaskIntoConstraints = false
        return navigationBar
    }()
    
    private let guideLabel: UILabel = {
        let guideLabel = UILabel()
        guideLabel.text = "지역은 최소 1개,\n최대 2개까지 설정 가능해요." // string literal 따로 정리
        guideLabel.textAlignment = .center
        guideLabel.numberOfLines = 2
        guideLabel.translatesAutoresizingMaskIntoConstraints = false
        return guideLabel
    }()
    
    private let stackView: UIStackView = {
        let stackView = UIStackView(arrangedSubviews: []) // 버튼 2개 넣기
        
        stackView.spacing = 8
        stackView.axis = .horizontal
        stackView.distribution = .fillEqually
        stackView.alignment = .fill
        
        return stackView
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
        let safeArea = self.view.safeAreaLayoutGuide
        self.view.addSubview(navigationBar)
        self.view.addSubview(guideLabel)
        
        NSLayoutConstraint.activate([
            navigationBar.topAnchor.constraint(equalTo: safeArea.topAnchor),
            navigationBar.leadingAnchor.constraint(equalTo: safeArea.leadingAnchor),
            navigationBar.trailingAnchor.constraint(equalTo: safeArea.trailingAnchor),
            
            guideLabel.topAnchor.constraint(equalTo: navigationBar.bottomAnchor, constant: 50),
            guideLabel.leadingAnchor.constraint(equalTo: safeArea.leadingAnchor, constant: 15),
            guideLabel.trailingAnchor.constraint(equalTo: safeArea.trailingAnchor, constant: -15)
        ])
            
        let navItem = UINavigationItem(title: "동네 설정")
        let leftButton = UIBarButtonItem(title: "닫기", style: .plain, target: self, action: #selector(dismissModal))
        navItem.leftBarButtonItem = leftButton
        navItem.leftBarButtonItem?.tintColor = .black

        navigationBar.setItems([navItem], animated: true)
    }
    
    @objc func dismissModal() {
        self.dismiss(animated: true)
    }
}
