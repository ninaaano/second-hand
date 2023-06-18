//
//  CategoryFilterCollectionViewCell.swift
//  temp-uikit-layout
//
//  Created by Effie on 2023/06/14.
//

import UIKit

final class CategoryFilterCollectionViewCell: UICollectionViewCell {
    private let label: PillShapePaddedLabel = {
        let label = PillShapePaddedLabel(inset: .init(top: 8, left: 16, bottom: 8, right: 16))
        label.layer.borderColor = UIColor.systemGray5.cgColor
        label.applyStyle(font: FontStyle.caption1, color: ColorStyle.black)
        return label
    }()
    
    override var isSelected: Bool {
        didSet {
            isSelected ? setSelected() : setDeselected()
        }
    }
    
    // MARK: Initializers
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setLabel()
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setLabel()
    }
    
    private func setLabel() {
        contentView.preservesSuperviewLayoutMargins = false
        contentView.addSubview(label)
        NSLayoutConstraint.activate([
            label.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            label.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
            label.topAnchor.constraint(equalTo: contentView.topAnchor),
            label.bottomAnchor.constraint(equalTo: contentView.bottomAnchor),
        ])
        setDeselected()
    }
    
    private func setSelected() {
        label.backgroundColor = ColorStyle.orange
        label.layer.borderWidth = 0
        label.textColor = ColorStyle.white
    }
    
    private func setDeselected() {
        label.backgroundColor = ColorStyle.white
        label.layer.borderWidth = 1
        label.textColor = ColorStyle.black
    }
    
    func configure(text: String) {
        label.text = text
    }
}
