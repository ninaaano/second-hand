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
    
    func setViewControllers() {
        let navigationController = UINavigationController(rootViewController: HomeViewController())
        let sellHistory = SellHistoryViewController()
        let watchlist = WatchlistViewController()
        let chat = ChatViewController()
        let myAccount = MyAccountViewController()
        // navbar를 비활성화하면 <back 버튼도 안생김
        let controllers: [UIViewController] = [
            navigationController, sellHistory, watchlist, chat, myAccount
        ]
        
        navigationController.tabBarItem = UITabBarItem(title: "홈화면", image: UIImage(systemName: "house")?.withTintColor(.black), selectedImage: nil)
        sellHistory.tabBarItem = UITabBarItem(title: "판매내역", image: UIImage(systemName: "newspaper")?.withTintColor(.black), selectedImage: nil)
        watchlist.tabBarItem = UITabBarItem(title: "관심목록", image: UIImage(systemName: "heart")?.withTintColor(.black), selectedImage: nil)
        chat.tabBarItem = UITabBarItem(title: "채팅", image: UIImage(systemName: "message")?.withTintColor(.black), selectedImage: nil)
        myAccount.tabBarItem = UITabBarItem(title: "내 계정", image: UIImage(systemName: "person")?.withTintColor(.black), selectedImage: nil)
        
        setViewControllers(controllers, animated: false)
    }
    
  
}
