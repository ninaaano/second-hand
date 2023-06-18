//
//  CollectionViewLayoutGenerator.swift
//  temp-uikit-layout
//
//  Created by Effie on 2023/06/14.
//

import UIKit

struct CollectionViewLayoutGenerator {
    static func createHorizontalLayout() -> UICollectionViewCompositionalLayout {
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
    
    static func createListLayout() -> UICollectionViewCompositionalLayout {
        let sectionProvider: UICollectionViewCompositionalLayoutSectionProvider = { _, environment in
            var config = UICollectionLayoutListConfiguration(appearance: .plain)
            config.showsSeparators = true
            return NSCollectionLayoutSection.list(using: config, layoutEnvironment: environment)
        }
        return UICollectionViewCompositionalLayout(sectionProvider: sectionProvider)
    }
    
    static func createInsetGrid() -> UICollectionViewCompositionalLayout {
        let itemPerLine = 3
        let itemWidthProportion: CGFloat = 1 / CGFloat(itemPerLine)
        let itemSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(itemWidthProportion),
                                             heightDimension: .fractionalHeight(1.0))
        let item = NSCollectionLayoutItem(layoutSize: itemSize)

        let groupSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0),
                                               heightDimension: .absolute(68))
        let group = NSCollectionLayoutGroup.horizontal(
            layoutSize: groupSize,
            repeatingSubitem: item,
            count: itemPerLine
        )
        group.interItemSpacing = .fixed(36.5)

        let section = NSCollectionLayoutSection(group: group)
        section.interGroupSpacing = 32
        section.contentInsets = .init(top: 40, leading: 40, bottom: 40, trailing: 40)
        
        let layout = UICollectionViewCompositionalLayout(section: section)
        return layout
    }
}
