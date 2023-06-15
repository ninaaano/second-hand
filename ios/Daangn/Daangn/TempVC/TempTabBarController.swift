//
//  TempTabBarController.swift
//  temp-uikit-layout
//
//  Created by Effie on 2023/06/15.
//

import UIKit

class TempTabBarController: UITabBarController {
    override func viewDidLoad() {
        super.viewDidLoad()
        self.view.backgroundColor = .systemBackground
        setViewControllers()
    }
    
    func setViewControllers() {
        let homeVC = HomeViewController()
        let homeNavi = UINavigationController(rootViewController: homeVC)
        homeNavi.navigationBar.prefersLargeTitles = false
        homeNavi.tabBarItem.title = "판매내역"
        homeNavi.tabBarItem.image = UIImage(systemName: "house")
        
        let productListVC = SalesViewController()
        let productNavi = UINavigationController(rootViewController: productListVC)
        productNavi.navigationBar.prefersLargeTitles = false
        productNavi.tabBarItem.title = "판매내역"
        productNavi.tabBarItem.image = UIImage(systemName: "pencil")
        
        let wishlistVC = TempWishListViewController()
        let wishNavi = UINavigationController(rootViewController: wishlistVC)
        wishNavi.navigationBar.prefersLargeTitles = false
        wishNavi.tabBarItem.title = "관심목록"
        wishNavi.tabBarItem.image = UIImage(systemName: "heart")
        
        let controllers = [
            homeNavi,
            productNavi,
            wishNavi,
        ]
        setViewControllers(controllers, animated: false)
    }
}
