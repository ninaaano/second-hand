//
//  BorderView.swift
//  temp-uikit-layout
//
//  Created by Effie on 2023/06/15.
//

import UIKit

final class BorderLine: UIView {
    convenience init(height: CGFloat) {
        self.init(frame: .zero)
        set(heigth: height)
    }
    
    private func set(heigth: CGFloat) {
        backgroundColor = ColorStyle.gray600
        translatesAutoresizingMaskIntoConstraints = false
        heightAnchor.constraint(equalToConstant: heigth).isActive = true
    }
}
