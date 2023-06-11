//
//  TabBarController.swift
//  Daangn
//
//  Created by Effie on 2023/06/11.
//

import UIKit

final class TabBarController: UITabBarController {
    override func viewDidLoad() {
        super.viewDidLoad()
        setViewControllers()
    }
    
    func setViewControllers() {
        let tempViewController = UIViewController()
        tempViewController.view.backgroundColor = .cyan
        
        let controllers: [UIViewController] = [
            tempViewController
        ]
        setViewControllers(controllers, animated: false)
    }
}
