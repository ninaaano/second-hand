//
//  LoginButton.swift
//  Daangn
//
//  Created by Effie on 2023/06/16.
//

import UIKit

final class LoginButton: UIButton {
    enum Status {
        case login
        case logout
        
        var text: String {
            switch self {
            case .login: return "Github으로 로그인"
            case .logout: return "로그아웃"
            }
        }
        
        var backgroundColor: UIColor? {
            switch self {
            case .login: return .orange
            case .logout: return .black
            }
        }
    }
    
    static let height: CGFloat = 52
    
    private let label: UILabel = {
        let label = UILabel()
        label.applyStyle(font: FontStyle.headline, color: ColorStyle.white)
        label.textAlignment = .center
        label.text = "Github으로 로그인"
        label.translatesAutoresizingMaskIntoConstraints = false
        label.setContentHuggingPriority(.defaultLow, for: .horizontal)
        return label
    }()
    
    let status: Status
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        return nil
    }
    
    init(status: Status) {
        self.status = status
        super.init(frame: .zero)
        setLayout()
        self.setRadius(radius: .roundedRectangle)
        layer.borderColor = ColorStyle.orange?.cgColor
        setStatus()
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
    }
    
    private func setStatus() {
        label.text = status.text
        backgroundColor = status.backgroundColor
    }
}
