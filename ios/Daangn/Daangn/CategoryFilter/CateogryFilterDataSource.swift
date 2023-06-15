//
//  CateogryFilterDataSource.swift
//  temp-uikit-layout
//
//  Created by Effie on 2023/06/15.
//

import UIKit

enum FilterSection {
    case category
}

final class CateogryFilterDataSource: UICollectionViewDiffableDataSource<FilterSection, Category> {
    typealias CollectionView = CategoryFilterCollectionView
    typealias Cell = CategoryFilterCollectionViewCell
    
    static let cellProvider: CellProvider = { collectionView, indexPath, itemIdentifier in
        guard let cell = collectionView.dequeueReusableCell(
            withReuseIdentifier: "\(Cell.self)",
            for: indexPath
        ) as? Cell else { return UICollectionViewCell() }
        cell.configure(text: itemIdentifier.korean)
        return cell
    }
    
    convenience init(_ collectionView: CollectionView) {
        self.init(collectionView: collectionView, cellProvider: Self.cellProvider)
    }
}
