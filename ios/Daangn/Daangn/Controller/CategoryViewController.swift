//
//  CategoryViewController.swift
//  Daangn
//
//  Created by ilim on 2023/06/13.
//

import UIKit

final class CategoryViewController: UIViewController {
    typealias Cell = CategoryCollectionViewCell
    typealias DataSource = UICollectionViewDiffableDataSource<FilterSection, Category>
    
    private let collectionView = UICollectionView(frame: .zero, collectionViewLayout: CollectionViewLayoutGenerator.createInsetGrid())
    private var dataSource: DataSource?
    
    private let border = BorderLine(height: 1)
    
    override func viewDidLoad() {
        super.viewDidLoad()
        title = "카테고리"
        setCollectionView()
        setLayout()
        setDataSource()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        tabBarController?.tabBar.isHidden = true
    }
    
    private func setCollectionView() {
        collectionView.backgroundColor = ColorStyle.white
        collectionView.isScrollEnabled = false
        collectionView.register(CategoryCollectionViewCell.self,
                                forCellWithReuseIdentifier: "\(Cell.self)")
    }
    
    private func setLayout() {
        view.addSubview(border)
        NSLayoutConstraint.activate([
            border.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            border.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            border.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
        ])
        
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(collectionView)
        let safeArea = view.safeAreaLayoutGuide
        NSLayoutConstraint.activate([
            collectionView.topAnchor.constraint(equalTo: border.bottomAnchor),
            collectionView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            collectionView.leadingAnchor.constraint(equalTo: safeArea.leadingAnchor),
            collectionView.trailingAnchor.constraint(equalTo: safeArea.trailingAnchor),
        ])
    }
    
    private func setDataSource() {
        let cellProvider: DataSource.CellProvider = { collectionView, indexPath, item in
            guard let cell = collectionView.dequeueReusableCell(
                withReuseIdentifier: "\(Cell.self)",
                for: indexPath
            ) as? Cell else { return UICollectionViewCell() }
            cell.configure(name: item.korean, symbolName: item.symbolName)
            return cell
        }
        dataSource = DataSource(collectionView: collectionView, cellProvider: cellProvider)
        
        var snapshot = NSDiffableDataSourceSnapshot<FilterSection, Category>()
        snapshot.appendSections([.category])
        snapshot.appendItems(Category.onlyCategories)
        dataSource?.apply(snapshot)
    }
}
