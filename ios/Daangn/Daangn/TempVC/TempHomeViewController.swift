//
//  TempHomeViewController.swift
//  temp-uikit-layout
//
//  Created by Effie on 2023/06/14.
//

import UIKit

class TempHomeViewController: UIViewController {
    private let collectionView = ProductListCollectionView()
    private lazy var dataSource: ProductListDataSource? = ProductListDataSource(collectionView)
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setLayout()
        applyUpdatedSnapshot()
    }
    
    private func setLayout() {
        view.addSubview(collectionView)
        NSLayoutConstraint.activate([
            collectionView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            collectionView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            collectionView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            collectionView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor),
        ])
    }
    
    private func applyUpdatedSnapshot() {
        var snapshot = NSDiffableDataSourceSnapshot<ProductListSection, ProductListItem>()
        snapshot.appendSections([.product, .load])
        // TODO: 임시 코드 수정
        let products = (1...100).map { ProductListItem.product($0) }
        snapshot.appendItems(products, toSection: .product)
        if true { snapshot.appendItems([.load], toSection: .load) }
        dataSource?.apply(snapshot, animatingDifferences: true)
    }
}
