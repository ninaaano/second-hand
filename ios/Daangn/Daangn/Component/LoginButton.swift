//
//  LoginButton.swift
//  Daangn
//
//  Created by Effie on 2023/06/16.
//

import UIKit

final class LoginButton: UIButton {
    static let height: CGFloat = 52
    
    private let label: UILabel = {
        let label = UILabel()
        label.applyStyle(font: FontStyle.subhead, color: ColorStyle.white)
        label.textAlignment = .center
        label.text = "Github으로 로그인"
        label.translatesAutoresizingMaskIntoConstraints = false
        label.setContentHuggingPriority(.defaultLow, for: .horizontal)
        return label
    }()
    
    var isLogined: Bool = false {
        didSet {
            if isLogined == false {
                setLoggedIn()
            } else {
                setLoggedOut()
            }
        }
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        return nil
    }
    
    init() {
        super.init(frame: .zero)
        setLayout()
        setLoggedOut()
    }
    
    private func setLayout() {
        addSubview(label)
        NSLayoutConstraint.activate([
            label.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 20),
            label.trailingAnchor.constraint(equalTo: self.trailingAnchor, constant: -20),
            label.topAnchor.constraint(equalTo: self.topAnchor, constant: 16),
            label.bottomAnchor.constraint(equalTo: self.bottomAnchor, constant: -16),
        ])
        
        self.translatesAutoresizingMaskIntoConstraints = false
        self.heightAnchor.constraint(equalToConstant: Self.height).isActive = true
        self.setRadius(radius: .roundedRectangle)
    }
    
    private func setLoggedIn() {
        label.text = "로그아웃"
        backgroundColor = ColorStyle.orange
    }
    
    private func setLoggedOut() {
        label.text = "Github으로 로그인"
        backgroundColor = ColorStyle.black
    }
}
