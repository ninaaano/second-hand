//
//  ConfigureTown.swift
//  Daangn
//
//  Created by ilim on 2023/06/14.
//

import UIKit

final class ConfigureTown: UIViewController {
    private let height: CGFloat = 52
    private let leftUIView = UIView()
    private let rightUIView = UIView()
    private let leftTownLabel = UILabel()
    private let rightTownLabel = UILabel()
    private let addTownButton = UIButton()
    private var townStackView = UIStackView()
    private let leftDeleteButton = UIButton()
    private let rightDeleteButton = UIButton()
    private let searchTownController = SearchTownController()
    private let townRegisterGuide = "지역은 최소 1개,\n최대 2개까지 설정 가능해요."
    private var townList = ["역삼1동"] {
        didSet {
            setStackView()
        }
    }
    
    func rightLabelButtonLayout() {
        NSLayoutConstraint.activate([
            rightTownLabel.leadingAnchor.constraint(equalTo: rightUIView.leadingAnchor, constant: 20),
            rightTownLabel.centerYAnchor.constraint(equalTo: rightUIView.centerYAnchor),
            rightTownLabel.trailingAnchor.constraint(equalTo: rightDeleteButton.leadingAnchor, constant: -4),
            rightDeleteButton.centerYAnchor.constraint(equalTo: rightUIView.centerYAnchor),
            rightDeleteButton.trailingAnchor.constraint(equalTo: rightUIView.trailingAnchor, constant: -20)
        ])
    }
    
    func addTownButtonLayout() {
        NSLayoutConstraint.activate([
            addTownButton.centerYAnchor.constraint(equalTo: rightUIView.centerYAnchor),
            addTownButton.centerXAnchor.constraint(equalTo: rightUIView.centerXAnchor)
        ])
    }

    
    private let navigationBar: UINavigationBar = {
        let navigationBar = UINavigationBar()
        navigationBar.translatesAutoresizingMaskIntoConstraints = false
        return navigationBar
    }()
    
    private lazy var guideLabel: UILabel = {
        let guideLabel = UILabel()
        guideLabel.text = townRegisterGuide
        guideLabel.textAlignment = .center
        guideLabel.numberOfLines = 2
        guideLabel.translatesAutoresizingMaskIntoConstraints = false
        return guideLabel
    }()

    private lazy var stackView: UIStackView = {
        townStackView.translatesAutoresizingMaskIntoConstraints = false
        townStackView.axis = .horizontal
        townStackView.spacing = 8
        townStackView.distribution = .fillEqually
        return townStackView
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        NotificationCenter.default.addObserver(self, selector: #selector(addTown), name: Notification.Name("addTown"), object: nil)
        setTag()
        view.backgroundColor = .white
        let safeArea = self.view.safeAreaLayoutGuide
        self.view.addSubview(navigationBar)
        self.view.addSubview(guideLabel)
        self.view.addSubview(stackView)
        setComponent()
        setAutoLayout(safeArea: safeArea)
        setNavigationBar()
    }
    
    func setTag() {
        rightDeleteButton.tag = 3
    }
    
    @objc func addTown(notification: Notification) {
        guard let town = notification.userInfo?["townName"] as? String else { return }
        townList.append(town)
    }

    func makeTownLabel(townName: String, townLabel: UILabel) -> UILabel {
        townLabel.translatesAutoresizingMaskIntoConstraints = false
        townLabel.text = townName
        townLabel.textAlignment = .left
        townLabel.textColor = ColorStyle.white
        townLabel.font = FontStyle.subhead
        return townLabel
    }
    
    func makeDeleteTownButton(deleteButton: UIButton) -> UIButton {
        deleteButton.translatesAutoresizingMaskIntoConstraints = false
        deleteButton.titleLabel?.font = FontStyle.subhead
        deleteButton.setTitle("X", for: .normal)
        deleteButton.setTitleColor(ColorStyle.white, for: .normal)
        deleteButton.contentHorizontalAlignment = .right
        if deleteButton.tag == 3 {
            deleteButton.addTarget(self, action: #selector(deleteSecondTownAlert), for: .touchUpInside)
        } else {
            deleteButton.addTarget(self, action: #selector(deleteFirstTownAlert), for: .touchUpInside)
        }
        return deleteButton
    }
    
    func makeAddTownButton() -> UIButton {
        addTownButton.translatesAutoresizingMaskIntoConstraints = false
        addTownButton.titleLabel?.font = FontStyle.subhead
        addTownButton.setTitle("+", for: .normal)
        addTownButton.setTitleColor(ColorStyle.black, for: .normal)
        addTownButton.contentHorizontalAlignment = .center
        addTownButton.addTarget(self, action: #selector(moveToSearchTown), for: .touchUpInside)
        return addTownButton
    }
    
    func makeUIView(uiview: UIView, townLabel: UILabel = UILabel(), button: UIButton = UIButton()) -> UIView {
        if button.titleLabel?.text == "X" {
            uiview.addSubview(townLabel)
            uiview.addSubview(button)
        } else {
            uiview.addSubview(button)
            uiview.layer.borderColor = ColorStyle.gray500?.cgColor
            uiview.layer.borderWidth = 1
        }
        uiview.backgroundColor = button.titleLabel?.text == "X" ? ColorStyle.orange : ColorStyle.white
        uiview.translatesAutoresizingMaskIntoConstraints = false
        uiview.heightAnchor.constraint(equalToConstant: height).isActive = true
        uiview.setRadius(radius: .roundedRectangle)
        return uiview
    }
    
    func setAutoLayout(safeArea: UILayoutGuide) {
        NSLayoutConstraint.activate([
            navigationBar.topAnchor.constraint(equalTo: safeArea.topAnchor),
            navigationBar.leadingAnchor.constraint(equalTo: safeArea.leadingAnchor),
            navigationBar.trailingAnchor.constraint(equalTo: safeArea.trailingAnchor),
            
            guideLabel.topAnchor.constraint(equalTo: navigationBar.bottomAnchor, constant: 50),
            guideLabel.leadingAnchor.constraint(equalTo: safeArea.leadingAnchor, constant: 15),
            guideLabel.trailingAnchor.constraint(equalTo: safeArea.trailingAnchor, constant: -15),
            
            leftDeleteButton.centerYAnchor.constraint(equalTo: leftUIView.centerYAnchor),
            leftDeleteButton.trailingAnchor.constraint(equalTo: leftUIView.trailingAnchor, constant: -20),
            
            leftTownLabel.leadingAnchor.constraint(equalTo: leftUIView.leadingAnchor, constant: 20),
            leftTownLabel.centerYAnchor.constraint(equalTo: leftUIView.centerYAnchor),
            leftTownLabel.trailingAnchor.constraint(equalTo: leftDeleteButton.leadingAnchor, constant: -4),
            
            stackView.topAnchor.constraint(equalTo: guideLabel.bottomAnchor, constant: 48),
            stackView.leadingAnchor.constraint(equalTo: safeArea.leadingAnchor, constant: 16),
            stackView.trailingAnchor.constraint(equalTo: safeArea.trailingAnchor, constant: -16),
            stackView.centerXAnchor.constraint(equalTo: safeArea.centerXAnchor)
        ])
    }
    
    @objc func deleteFirstTownAlert() {
        let alert = UIAlertController(title: "'\(townList[0])'을 삭제하시겠어요?", message: "", preferredStyle: .alert)
        let success = UIAlertAction(title: "삭제", style: .destructive) { [self] _ in
            if townList.count == 1 {
                notifyUnableToDelete()
            } else {
                townList.remove(at: 0)
            }
        }
        let cancel = UIAlertAction(title: "취소", style: .cancel)
        alert.addAction(success)
        alert.addAction(cancel)
        present(alert, animated: true)
    }
    
    @objc func deleteSecondTownAlert() {
        let alert = UIAlertController(title: "'\(townList[1])'을 삭제하시겠어요?", message: "", preferredStyle: .alert)
        let success = UIAlertAction(title: "삭제", style: .destructive) { [self] _ in
            if townList.count == 1 {
                notifyUnableToDelete()
            } else {
                townList.remove(at: 1)
            }
        }
        let cancel = UIAlertAction(title: "취소", style: .cancel)
        alert.addAction(success)
        alert.addAction(cancel)
        present(alert, animated: true)
    }
    
    func setComponent() {
        for index in 0 ..< townList.count { // 이거 함수로 빼야될듯 위에 있는 변수들 파라미터로 다 넘기고
            if townList[index] != "" {
                if index == 0 {
                    let leftButton = makeDeleteTownButton(deleteButton: leftDeleteButton)
                    let leftLabel = makeTownLabel(townName: townList[index], townLabel: leftTownLabel)
                    let leftView = makeUIView(uiview: leftUIView, townLabel: leftLabel, button: leftButton)
                    stackView.addArrangedSubview(leftView)
                } else {
                    let rightButton = makeDeleteTownButton(deleteButton: rightDeleteButton)
                    let rightLabel = makeTownLabel(townName: townList[index], townLabel: rightTownLabel)
                    let rightView = makeUIView(uiview: rightUIView, townLabel: rightLabel, button: rightButton)
                    stackView.addArrangedSubview(rightView)
                    rightLabelButtonLayout()
                }
            }
        }
        if townList.count == 1 {
            let addButton = makeAddTownButton()
            let rightView = makeUIView(uiview: rightUIView, button: addButton)
            stackView.addArrangedSubview(rightView)
            addTownButtonLayout()
        }
    }
    
    @objc func setStackView() {
        stackView.arrangedSubviews.forEach { $0.removeFromSuperview() }
        if townList.count == 2 {
            addTownButton.isEnabled = false
            addTownButton.isHidden = true
            rightDeleteButton.isEnabled = true
        } else {
            addTownButton.isHidden = false
            addTownButton.isEnabled = true
            rightDeleteButton.isEnabled = false
        }
        setComponent()
    }

    private func notifyUnableToDelete() {
        let alert = UIAlertController(title: "동네는 최소 1개 이상 선택해야해요. 새로운 동네를 등록한 후, 삭제해주세요", message: "", preferredStyle: .alert)
        let success = UIAlertAction(title: "확인", style: .default)
        alert.addAction(success)
        present(alert, animated: true)
    }
    
    @objc func moveToSearchTown(action: UIAction) {
        present(searchTownController, animated: true)
    }
    
    private func setNavigationBar() {
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
