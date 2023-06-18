//
//  CategoryCollectionViewCell.swift
//  Daangn
//
//  Created by Effie on 2023/06/16.
//

import UIKit

final class CategoryCollectionViewCell: UICollectionViewCell {
    private let symbol: UIImageView = {
        let imageView = UIImageView()
        imageView.tintColor = ColorStyle.gray600
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
    
    private lazy var symbolContainer: UIView = {
        let container = UIView()
        container.setRadius(constant: 8)
        container.backgroundColor = ColorStyle.gray200
        container.layoutMargins = .init(top: 8, left: 8, bottom: 8, right: 8)
        container.translatesAutoresizingMaskIntoConstraints = false
        container.widthAnchor.constraint(equalTo: container.heightAnchor, multiplier: 1).isActive = true
        return container
    }()
    
    private let categoryNameLabel: UILabel = {
        let label = UILabel()
        label.applyStyle(font: FontStyle.caption1, color: ColorStyle.gray900)
        label.textAlignment = .center
        label.translatesAutoresizingMaskIntoConstraints = false
        label.heightAnchor.constraint(greaterThanOrEqualToConstant: 20).isActive = true
        label.backgroundColor = .white
        return label
    }()
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        return nil
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setLayout()
    }
    
    init() {
        super.init(frame: .zero)
        setLayout()
    }
    
    private func setLayout() {
        contentView.preservesSuperviewLayoutMargins = false

        contentView.addSubview(symbolContainer)
        NSLayoutConstraint.activate([
            symbolContainer.topAnchor.constraint(equalTo: contentView.topAnchor),
            symbolContainer.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            symbolContainer.heightAnchor.constraint(equalToConstant: 38),
        ])
        
        contentView.addSubview(categoryNameLabel)
        NSLayoutConstraint.activate([
            categoryNameLabel.topAnchor.constraint(equalTo: symbolContainer.bottomAnchor, constant: 4),
            categoryNameLabel.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            categoryNameLabel.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
        ])
        let bottom = categoryNameLabel.bottomAnchor.constraint(equalTo: contentView.bottomAnchor)
        bottom.priority = .defaultLow
        bottom.isActive = true
        
        symbolContainer.addSubview(symbol)
        NSLayoutConstraint.activate([
            symbol.centerXAnchor.constraint(equalTo: symbolContainer.centerXAnchor),
            symbol.centerYAnchor.constraint(equalTo: symbolContainer.centerYAnchor),
            symbol.widthAnchor.constraint(equalTo: symbolContainer.widthAnchor, multiplier: 0.6),
            symbol.heightAnchor.constraint(equalTo: symbolContainer.heightAnchor, multiplier: 0.6),
        ])
    }
    
    func configure(name: String, symbolName: String) {
        categoryNameLabel.text = name
        symbol.image = UIImage(systemName: symbolName)
    }
}
