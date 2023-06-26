//
//  ErrorHandler.swift
//  Daangn
//
//  Created by Effie on 2023/06/26.
//

import UIKit

class ErrorHandler {
    static func alertError(_ error: Error, presentOn presenter: UIViewController) {
        let title = "알림"
        let message = "어떤 에러가 발생했습니다."
        let alert = UIAlertController(
            title: title,
            message: message,
            preferredStyle: .alert
        )
        
        let cancleAction = UIAlertAction(title: "취소", style: .cancel) { action in
            alert.dismiss(animated: true)
        }
        
        let okAction = UIAlertAction(title: "확인", style: .default) { action in
//            alert.dismiss(animated: true)
        }
        
        alert.addAction(cancleAction)
        alert.addAction(okAction)
        
        presenter.show(alert, sender: nil)
    }
}
