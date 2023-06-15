//
//  IDField.swift
//  Daangn
//
//  Created by Effie on 2023/06/16.
//

import UIKit

final class IDField: UIView {
    private let label: UILabel = {
        let label = UILabel(frame: .zero)
        label.text = "아이디"
        label.applyStyle(font: FontStyle.body, color: ColorStyle.black)
        label.translatesAutoresizingMaskIntoConstraints = false
        label.setContentHuggingPriority(.required, for: .horizontal)
        return label
    }()
    
    private let field: UITextField = {
        let field = UITextField(frame: .zero)
        field.placeholder = "아이디를 입력하세요"
        field.borderStyle = .none
        field.tintColor = .blue
        field.translatesAutoresizingMaskIntoConstraints = false
        return field
    }()
    
    private let border: Boarder = Boarder(height: 0.5)
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        return nil
    }
    
    init() {
        super.init(frame: .zero)
        setLayout()
    }
    
    private func setLayout() {
        addSubview(label)
        NSLayoutConstraint.activate([
            label.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 16),
            label.topAnchor.constraint(equalTo: self.topAnchor, constant: 11),
            label.bottomAnchor.constraint(equalTo: self.bottomAnchor, constant: -11),
        ])
        
        addSubview(field)
        NSLayoutConstraint.activate([
            field.leadingAnchor.constraint(equalTo: label.trailingAnchor, constant: 52),
            field.centerYAnchor.constraint(equalTo: label.centerYAnchor),
            field.trailingAnchor.constraint(equalTo: self.trailingAnchor, constant: -16),
        ])
        
        addSubview(border)
        NSLayoutConstraint.activate([
            border.leadingAnchor.constraint(equalTo: self.leadingAnchor),
            border.trailingAnchor.constraint(equalTo: self.trailingAnchor),
            border.bottomAnchor.constraint(equalTo: self.bottomAnchor),
        ])
        
        self.translatesAutoresizingMaskIntoConstraints = false
    }
}
