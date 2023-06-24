//
//  SearchTownController.swift
//  Daangn
//
//  Created by ilim on 2023/06/20.
//
import UIKit

final class SearchTownController: UIViewController {
    private let gangnam = "서울 강남구 "
    private let townList = townDataSource
    private var filteredDataSource: [String] = []
    private let navigationBar: UINavigationBar = {
        let navigationBar = UINavigationBar()
        navigationBar.translatesAutoresizingMaskIntoConstraints = false
        return navigationBar
    }()
    
    private var navigationItems = UINavigationItem(title: "")

    private var isEditMode: Bool {
        let searchController = navigationItems.searchController
        let isActive = searchController?.isActive ?? false
        let isSearchBarHasText = searchController?.searchBar.text?.isEmpty == false
        return isActive && isSearchBarHasText
    }

    private lazy var tableView: UITableView = {
        let view = UITableView()
        view.register(UITableViewCell.self, forCellReuseIdentifier: "cell")
        view.delegate = self
        view.dataSource = self
        view.keyboardDismissMode = .onDrag
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
        view.addSubview(navigationBar)
        view.addSubview(tableView)
        let safeArea = self.view.safeAreaLayoutGuide
        setAutoLayout(safeArea: safeArea)
        setNavigationBar()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        navigationItems.searchController?.searchBar.searchTextField.text = ""
    }
    
    private func setNavigationBar() {
        let leftButton = UIBarButtonItem(title: "닫기", style: .plain, target: self, action: #selector(dismissModal))
        let searchController = UISearchController(searchResultsController: nil)
        
        searchController.searchBar.placeholder = "동명(읍,면)으로 검색(ex.서초동)"
        searchController.hidesNavigationBarDuringPresentation = false
        searchController.searchResultsUpdater = self
        searchController.obscuresBackgroundDuringPresentation = false
        navigationItems.leftBarButtonItem = leftButton
        navigationItems.leftBarButtonItem?.tintColor = .black
        navigationItems.searchController = searchController
        navigationItems.hidesSearchBarWhenScrolling = false
        navigationBar.setItems([navigationItems], animated: true)
    }
    
    func setAutoLayout(safeArea: UILayoutGuide) {
        NSLayoutConstraint.activate([
            navigationBar.topAnchor.constraint(equalTo: safeArea.topAnchor),
            navigationBar.leadingAnchor.constraint(equalTo: safeArea.leadingAnchor),
            navigationBar.trailingAnchor.constraint(equalTo: safeArea.trailingAnchor),
            
            tableView.topAnchor.constraint(equalTo: navigationBar.bottomAnchor),
            tableView.leadingAnchor.constraint(equalTo: safeArea.leadingAnchor),
            tableView.bottomAnchor.constraint(equalTo: safeArea.bottomAnchor),
            tableView.trailingAnchor.constraint(equalTo: safeArea.trailingAnchor)
        ])
    }
    
    @objc func dismissModal() {
        self.presentingViewController?.dismiss(animated: true)
    }
    
    func alram(town: String) {
        NotificationCenter.default.post(name: Notification.Name("addTown"), object: nil, userInfo: ["townName": town])
    }
}

extension SearchTownController: UITableViewDelegate, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return isEditMode ? filteredDataSource.count : townList.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell")
        cell?.textLabel?.text = isEditMode ? gangnam + filteredDataSource[indexPath.row] : gangnam + townList[indexPath.row]
        return cell!
    }

    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 52
    }

    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let townName = isEditMode ? filteredDataSource[indexPath.row] : townList[indexPath.row]
        alram(town: townName)
        dismissModal()
    }
}

extension SearchTownController: UISearchResultsUpdating {
    func updateSearchResults(for searchController: UISearchController) {
        guard let text = searchController.searchBar.text else { return }
        filteredDataSource = townList.filter { $0.contains(text) }
        tableView.reloadData()
    }
}
