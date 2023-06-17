//
//  CategoryCollectionViewCell.swift
//  Daangn
//
//  Created by Effie on 2023/06/16.
//

import UIKit

final class CategoryCollectionViewCell: UICollectionViewCell {
    private let symbolView: UIImageView = {
        let imageView = UIImageView()
        imageView.setRadius(constant: 8)
        imageView.backgroundColor = ColorStyle.gray50
        imageView.tintColor = ColorStyle.orange
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.widthAnchor.constraint(equalTo: imageView.heightAnchor, multiplier: 1).isActive = true
        return imageView
    }()
    
    private let categoryNameLabel: UILabel = {
        let label = UILabel()
        label.applyStyle(font: FontStyle.subhead, color: ColorStyle.gray900)
        label.textAlignment = .center
        label.translatesAutoresizingMaskIntoConstraints = false
        label.heightAnchor.constraint(greaterThanOrEqualToConstant: 20).isActive = true
        return label
    }()
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        return nil
    }
    
    init() {
        super.init(frame: .zero)
        setLayout()
    }
    
    private func setLayout() {
        contentView.preservesSuperviewLayoutMargins = false
        
        contentView.addSubview(symbolView)
        NSLayoutConstraint.activate([
            symbolView.topAnchor.constraint(equalTo: contentView.topAnchor),
            symbolView.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            symbolView.widthAnchor.constraint(equalTo: contentView.widthAnchor, multiplier: 0.65),
        ])
        
        contentView.addSubview(categoryNameLabel)
        NSLayoutConstraint.activate([
            categoryNameLabel.bottomAnchor.constraint(equalTo: contentView.bottomAnchor),
            categoryNameLabel.leadingAnchor.constraint(equalTo: symbolView.leadingAnchor),
            categoryNameLabel.trailingAnchor.constraint(equalTo: symbolView.trailingAnchor),
        ])
        
        let labelTopConstraint = categoryNameLabel.topAnchor.constraint(equalTo: symbolView.bottomAnchor, constant: 4)
        labelTopConstraint.priority = .defaultHigh
        labelTopConstraint.isActive = true
    }
    
    func configure(name: String, symbolName: String) {
        categoryNameLabel.text = name
        symbolView.image = UIImage(systemName: symbolName)
    }
}
