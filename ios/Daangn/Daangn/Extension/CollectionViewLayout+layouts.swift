//
//  CollectionViewLayout+layouts.swift
//  temp-uikit-layout
//
//  Created by Effie on 2023/06/14.
//

import UIKit

extension UICollectionViewLayout {
    static func createHorizontal() -> UICollectionViewCompositionalLayout {
        let sectionProvider: UICollectionViewCompositionalLayoutSectionProvider = { _, _ in
            let layoutSize = NSCollectionLayoutSize(widthDimension: .estimated(100), heightDimension: .fractionalHeight(1))
            let item = NSCollectionLayoutItem(layoutSize: layoutSize)
            
            let groupSize = NSCollectionLayoutSize(widthDimension: .estimated(100), heightDimension: .absolute(32))
            let group = NSCollectionLayoutGroup.horizontal(layoutSize: groupSize, subitems: [item])
            
            let section = NSCollectionLayoutSection(group: group)
            section.orthogonalScrollingBehavior = .continuous
            section.interGroupSpacing = 4
            section.contentInsets = .init(top: 16, leading: 16, bottom: 0, trailing: 16)
            return section
        }
        return UICollectionViewCompositionalLayout(sectionProvider: sectionProvider)
    }
    
    static func createList() -> UICollectionViewCompositionalLayout {
        let sectionProvider: UICollectionViewCompositionalLayoutSectionProvider = { _, environment in
            var config = UICollectionLayoutListConfiguration(appearance: .plain)
            config.showsSeparators = true
            return NSCollectionLayoutSection.list(using: config, layoutEnvironment: environment)
        }
        return UICollectionViewCompositionalLayout(sectionProvider: sectionProvider)
    }
}
