//
//  ProductListImageView.swift
//  temp-uikit-layout
//
//  Created by Effie on 2023/06/14.
//

import UIKit

final class ProductListImageView: UIImageView {
    override init(frame: CGRect) {
        super.init(frame: frame)
        setProperties()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setProperties()
    }
    
    private func setProperties() {
        layer.borderColor = ColorStyle.gray600?.cgColor
        layer.borderWidth = 1
        setRadius(radius: .roundedRectangle)
        translatesAutoresizingMaskIntoConstraints = false
    }
}
