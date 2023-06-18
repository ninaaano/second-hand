//
//  LoadCollectionCollectionViewCell.swift
//  temp-uikit-layout
//
//  Created by Effie on 2023/06/13.
//

import UIKit

final class LoadCollectionViewCell: UICollectionViewCell {
    static let cellHeight: CGFloat = 40
    
    private let activityIndicator: UIActivityIndicatorView = {
        let indicator = UIActivityIndicatorView(frame: .zero)
        indicator.translatesAutoresizingMaskIntoConstraints = false
        indicator.startAnimating()
        return indicator
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setLayout()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setLayout()
    }
    
    private func setLayout() {
        contentView.addSubview(activityIndicator)
        NSLayoutConstraint.activate([
            activityIndicator.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            activityIndicator.centerYAnchor.constraint(equalTo: contentView.centerYAnchor),
            activityIndicator.widthAnchor.constraint(equalToConstant: Self.cellHeight),
            activityIndicator.heightAnchor.constraint(equalTo: contentView.widthAnchor),
        ])
    }
}
