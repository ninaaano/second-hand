//
//  UIView+Radius.swift
//  temp-uikit-layout
//
//  Created by Effie on 2023/06/15.
//

import UIKit

extension UIView {
    func setRadius(constant: CGFloat) {
        layer.cornerRadius = constant
        layer.masksToBounds = true
    }
    
    func setRadius(radius: Radius) {
        setRadius(constant: radius.rawValue)
    }
}
