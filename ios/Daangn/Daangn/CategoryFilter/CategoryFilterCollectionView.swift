//
//  CategoryFilterCollectionView.swift
//  temp-uikit-layout
//
//  Created by Effie on 2023/06/14.
//

import UIKit

final class CategoryFilterCollectionView: UICollectionView {
    typealias Cell = CategoryFilterCollectionViewCell
    
    convenience init() {
        self.init(frame: .zero, collectionViewLayout: .createList())
        set()
    }
    
    private func set() {
        translatesAutoresizingMaskIntoConstraints = false
        collectionViewLayout = UICollectionViewLayout.createHorizontal()
        register(Cell.self, forCellWithReuseIdentifier: "\(Cell.self)")
        
        alwaysBounceVertical = false
    }
}
