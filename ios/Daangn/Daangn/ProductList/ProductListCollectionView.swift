//
//  ProductListCollectionView.swift
//  temp-uikit-layout
//
//  Created by Effie on 2023/06/14.
//

import UIKit

final class ProductListCollectionView: UICollectionView {
    typealias ProductCell = ProductListCollectionViewCell
    typealias LoadCell = LoadCollectionViewCell
    
    convenience init() {
        self.init(frame: .zero, collectionViewLayout: .createList())
        set()
    }
    
    private func set() {
        translatesAutoresizingMaskIntoConstraints = false
        register(ProductCell.self, forCellWithReuseIdentifier: "\(ProductCell.self)")
        register(LoadCell.self, forCellWithReuseIdentifier: "\(LoadCell.self)")
    }
}
