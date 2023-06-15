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
        view.backgroundColor = ColorStyle.gray50
    }
    
    private func setViewControllers() {
        
        
        let homeViewController = HomeViewController()
        let homeNavigationController = UINavigationController(rootViewController: homeViewController)
        homeNavigationController.navigationBar.prefersLargeTitles = false
        homeNavigationController.tabBarItem.title = "홈화면"
        homeNavigationController.tabBarItem.image = generateStyledImage(systemName: "house")
        
        let salesViewController = SalesViewController()
        let salesNavigationController = UINavigationController(rootViewController: salesViewController)
        salesNavigationController.navigationBar.prefersLargeTitles = false
        salesNavigationController.tabBarItem.title = "판매내역"
        salesNavigationController.tabBarItem.image = generateStyledImage(systemName: "newspaper")

        let sellHistory = SellHistoryViewController()
        let watchlist = WatchlistViewController()
        let chat = ChatViewController()
        let myAccount = MyAccountViewController()
        // navbar를 비활성화하면 <back 버튼도 안생김
        
        watchlist.tabBarItem = UITabBarItem(title: "관심목록", image: UIImage(systemName: "heart")?.withTintColor(.black), selectedImage: nil)
        chat.tabBarItem = UITabBarItem(title: "채팅", image: UIImage(systemName: "message")?.withTintColor(.black), selectedImage: nil)
        myAccount.tabBarItem = UITabBarItem(title: "내 계정", image: UIImage(systemName: "person")?.withTintColor(.black), selectedImage: nil)
        
        let controllers: [UIViewController] = [
            homeNavigationController,
            salesNavigationController,
            watchlist,
            chat,
            myAccount,
        ]
        
        setViewControllers(controllers, animated: false)
    }
    
    private func generateStyledImage(systemName name: String) -> UIImage? {
        let tintColor = ColorStyle.black ?? .black
        return UIImage(systemName: name)?.withTintColor(tintColor).applyingSymbolConfiguration(.init(scale: .medium))
    }
}
