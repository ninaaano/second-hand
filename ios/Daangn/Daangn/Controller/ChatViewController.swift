//
//  ChatViewController.swift
//  Daangn
//
//  Created by ilim on 2023/06/13.
//

import UIKit

final class ChatViewController: UIViewController {
    override func viewDidLoad() {
        let label = UILabel(frame: CGRect(x: 100, y: 200, width: 200, height: 100))
        
        label.text = "chat"
        label.font = UIFont.boldSystemFont(ofSize: 20)
        label.sizeToFit()
        label.center.x = self.view.frame.width / 2
        
        self.view.addSubview(label)
        super.viewDidLoad()
    }
}
