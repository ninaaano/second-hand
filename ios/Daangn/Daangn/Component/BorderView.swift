//
//  BorderView.swift
//  temp-uikit-layout
//
//  Created by Effie on 2023/06/15.
//

import UIKit

final class Boarder: UIView {
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        return nil
    }
    
    init() {
        super.init(frame: .zero)
        set()
    }
    
    private func set() {
        backgroundColor = ColorStyle.gray600
        translatesAutoresizingMaskIntoConstraints = false
        heightAnchor.constraint(equalToConstant: 1).isActive = true
    }
}
