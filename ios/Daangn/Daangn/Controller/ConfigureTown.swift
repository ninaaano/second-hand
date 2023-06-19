//
//  ConfigureTown.swift
//  Daangn
//
//  Created by ilim on 2023/06/14.
//

import UIKit

final class ConfigureTown: UIViewController {
    private let height: CGFloat = 52
    private let defaultTown = "역삼1동"
    private let addTown = "+ 위치 추가"
    private let navigationBar: UINavigationBar = {
        let navigationBar = UINavigationBar()
        navigationBar.translatesAutoresizingMaskIntoConstraints = false
        return navigationBar
    }()
    
    private let guideLabel: UILabel = {
        let guideLabel = UILabel()
        guideLabel.text = "지역은 최소 1개,\n최대 2개까지 설정 가능해요."
        guideLabel.textAlignment = .center
        guideLabel.numberOfLines = 2
        guideLabel.translatesAutoresizingMaskIntoConstraints = false
        return guideLabel
    }()
    
    private lazy var addTownButton: UIButton = {
        let addButton = UIButton()
        addButton.translatesAutoresizingMaskIntoConstraints = false
        addButton.heightAnchor.constraint(equalToConstant: 20).isActive = true

        addButton.titleLabel?.font = FontStyle.subhead
        addButton.setTitle(addTown, for: .normal)
        addButton.setTitleColor(ColorStyle.black, for: .normal)
        addButton.contentHorizontalAlignment = .center
        
        return addButton
    }()
    
    private let deleteTownButton: UIButton = {
        let deleteButton = UIButton()
        deleteButton.translatesAutoresizingMaskIntoConstraints = false
        deleteButton.heightAnchor.constraint(equalToConstant: 20).isActive = true
        deleteButton.titleLabel?.font = FontStyle.subhead
        deleteButton.setTitle("X", for: .normal)
        deleteButton.setTitleColor(ColorStyle.white, for: .normal)
        deleteButton.contentHorizontalAlignment = .right
        return deleteButton
    }()
    
    private lazy var townNameLabel: UILabel = {
        let townLabel = UILabel()
        townLabel.translatesAutoresizingMaskIntoConstraints = false
        townLabel.text = defaultTown
        townLabel.textAlignment = .left
        townLabel.font = FontStyle.subhead
        townLabel.textColor = ColorStyle.white
        return townLabel
    }()
    
    private lazy var assignedTownStack: UIView = {
        let stackView = UIStackView()
        stackView.addSubview(townNameLabel)
        stackView.addSubview(deleteTownButton)
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.heightAnchor.constraint(equalToConstant: height).isActive = true
        stackView.backgroundColor = ColorStyle.orange
        stackView.setRadius(radius: .roundedRectangle)
        return stackView
    }()

    private lazy var addTownStack: UIView = {
        let stackView = UIStackView()
        stackView.addSubview(addTownButton)
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.heightAnchor.constraint(equalToConstant: height).isActive = true
        stackView.backgroundColor = ColorStyle.white
        stackView.layer.borderWidth = 1
        stackView.layer.borderColor = #colorLiteral(red: 0.501960814, green: 0.501960814, blue: 0.501960814, alpha: 1)
        stackView.setRadius(radius: .roundedRectangle)
        
        return stackView
    }()
    
    private lazy var entireStackView: UIStackView = {
        let stackView = UIStackView(arrangedSubviews: [assignedTownStack, addTownStack])
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.axis = .horizontal
        stackView.spacing = 8
        stackView.distribution = .fillEqually
        return stackView
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
        let safeArea = self.view.safeAreaLayoutGuide
        self.view.addSubview(navigationBar)
        self.view.addSubview(guideLabel)
        self.view.addSubview(entireStackView)
        setAutoLayout(safeArea: safeArea)
        setNavigationBar()
    }
    
    func setAutoLayout(safeArea: UILayoutGuide) {
        NSLayoutConstraint.activate([
            navigationBar.topAnchor.constraint(equalTo: safeArea.topAnchor),
            navigationBar.leadingAnchor.constraint(equalTo: safeArea.leadingAnchor),
            navigationBar.trailingAnchor.constraint(equalTo: safeArea.trailingAnchor),
            
            guideLabel.topAnchor.constraint(equalTo: navigationBar.bottomAnchor, constant: 50),
            guideLabel.leadingAnchor.constraint(equalTo: safeArea.leadingAnchor, constant: 15),
            guideLabel.trailingAnchor.constraint(equalTo: safeArea.trailingAnchor, constant: -15),
            
            deleteTownButton.centerYAnchor.constraint(equalTo: assignedTownStack.centerYAnchor),
            deleteTownButton.leadingAnchor.constraint(equalTo: townNameLabel.trailingAnchor),
            deleteTownButton.trailingAnchor.constraint(equalTo: assignedTownStack.trailingAnchor, constant: -20),
            
            townNameLabel.leadingAnchor.constraint(equalTo: assignedTownStack.leadingAnchor, constant: 20),
            townNameLabel.centerYAnchor.constraint(equalTo: assignedTownStack.centerYAnchor),
            townNameLabel.trailingAnchor.constraint(equalTo: deleteTownButton.leadingAnchor, constant: -4),
            
            addTownButton.centerYAnchor.constraint(equalTo: addTownStack.centerYAnchor),
            addTownButton.leadingAnchor.constraint(equalTo: addTownStack.leadingAnchor, constant: 60),
            
            entireStackView.topAnchor.constraint(equalTo: guideLabel.bottomAnchor, constant: 48),
            entireStackView.leadingAnchor.constraint(equalTo: safeArea.leadingAnchor, constant: 16),
            entireStackView.trailingAnchor.constraint(equalTo: safeArea.trailingAnchor, constant: -16),
            entireStackView.centerXAnchor.constraint(equalTo: safeArea.centerXAnchor)
        ])
    }
    
    func setNavigationBar() {
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
