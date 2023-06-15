//
//  HomeViewController.swift
//  Daangn
//
//  Created by ilim on 2023/06/13.
//

import UIKit

final class HomeViewController: UIViewController {
    private let category = CategoryViewController()
    private let configureTown = ConfigureTown()
    private let town = "역삼1동"
    func menuHandler(action: UIAction) {
        Swift.debugPrint("Menu handler: \(action.title)")
    }
    
    func moveToTownPicker(action: UIAction) {
        present(configureTown, animated: true)
    }
    
    func navBarItem() {
        let leftButton = UIBarButtonItem(title: town, style: .plain, target: self, action: nil)
        let rightButtonImage = UIImage(systemName: "line.3.horizontal")
        let rightButton = UIBarButtonItem(image: rightButtonImage, style: .plain, target: self, action: #selector(moveToCategory))
        let barButtonMenu = UIMenu(title: "", children: [
            UIAction(title: NSLocalizedString(town, comment: ""), handler: menuHandler),
            UIAction(title: NSLocalizedString("내 동네 설정하기", comment: ""), handler: moveToTownPicker)
        ])
        leftButton.menu = barButtonMenu
        configureNavBarButtonColor(left: leftButton, right: rightButton)
    }
    
    func configureNavBarButtonColor(left: UIBarButtonItem, right: UIBarButtonItem) {
        navigationItem.rightBarButtonItem = right
        navigationItem.leftBarButtonItem = left
        navigationItem.rightBarButtonItem?.tintColor = .black
        navigationItem.leftBarButtonItem?.tintColor = .black
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navBarItem()
    }
    
    @objc func moveToCategory() {
        self.navigationController?.pushViewController(category, animated: false)
    }
}
