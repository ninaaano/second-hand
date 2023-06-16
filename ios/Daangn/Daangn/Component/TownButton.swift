//
//  TownButton.swift
//  Daangn
//
//  Created by Effie on 2023/06/16.
//

import UIKit

final class TownButton: UIButton {
    private static let height: CGFloat = 52
    private static let locationAddText = "위치 추가"
    private static let defaultLocation = "역삼1동"
    
    private let plusLabel: UILabel = {
        let label = UILabel()
        label.text = "+"
        label.applyStyle(font: FontStyle.subhead, color: ColorStyle.black)
        label.setContentHuggingPriority(.required, for: .horizontal)
        label.setContentHuggingPriority(.required, for: .vertical)
        return label
    }()
    
    private let locationAddLabel: UILabel = {
        let label = UILabel()
        label.text = TownButton.locationAddText
        label.applyStyle(font: FontStyle.subhead, color: ColorStyle.black)
        label.setContentHuggingPriority(.required, for: .horizontal)
        label.setContentHuggingPriority(.required, for: .vertical)
        return label
    }()
    
    private let townLabel: UILabel = {
        let label = UILabel()
        label.text = TownButton.defaultLocation
        label.setContentHuggingPriority(.defaultLow, for: .horizontal)
        label.setContentHuggingPriority(.required, for: .vertical)
        label.applyStyle(font: FontStyle.subhead, color: ColorStyle.white)
        return label
    }()
    
    private let xLabel: UILabel = {
        let label = UILabel()
        label.text = "X"
        label.setContentHuggingPriority(.required, for: .horizontal)
        label.setContentHuggingPriority(.required, for: .vertical)
        label.applyStyle(font: FontStyle.subhead, color: ColorStyle.white)
        return label
    }()
    
    private lazy var addStack: UIStackView = {
        let stack = UIStackView(arrangedSubviews: [plusLabel, locationAddLabel])
        stack.axis = .horizontal
        stack.translatesAutoresizingMaskIntoConstraints = false
        stack.spacing = 4
        return stack
    }()
    
    private lazy var townStack: UIStackView = {
        let stack = UIStackView(arrangedSubviews: [townLabel, xLabel])
        stack.axis = .horizontal
        stack.translatesAutoresizingMaskIntoConstraints = false
        stack.spacing = 4
        return stack
    }()
    
    private var town: String? {
        didSet {
            if let town { // defined
                setTownDefined(townName: town)
            } else { // undefined
                setTownUndefined()
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
        setTown(Self.defaultLocation)
    }
    
    private func setLayout() {
        addSubview(addStack)
        NSLayoutConstraint.activate([
            addStack.centerXAnchor.constraint(equalTo: self.centerXAnchor),
            addStack.centerYAnchor.constraint(equalTo: self.centerYAnchor),
        ])
        
        addSubview(townStack)
        NSLayoutConstraint.activate([
            townStack.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 20),
            townStack.trailingAnchor.constraint(equalTo: self.trailingAnchor, constant: -20),
            townStack.topAnchor.constraint(equalTo: self.topAnchor, constant: 16),
            townStack.bottomAnchor.constraint(equalTo: self.bottomAnchor, constant: -16),
        ])
        
        self.translatesAutoresizingMaskIntoConstraints = false
        self.heightAnchor.constraint(equalToConstant: Self.height).isActive = true
        self.setRadius(radius: .roundedRectangle)
        self.layer.borderColor = ColorStyle.gray500?.cgColor
    }
    
    private func setTownUndefined() {
        addStack.isHidden = false
        townStack.isHidden = true
        townLabel.text = TownButton.locationAddText
        townLabel.textColor = ColorStyle.black
        backgroundColor = ColorStyle.white
        layer.borderWidth = 1
    }
    
    private func setTownDefined(townName: String) {
        addStack.isHidden = true
        townStack.isHidden = false
        townLabel.text = townName
        townLabel.textColor = ColorStyle.white
        backgroundColor = ColorStyle.orange
        layer.borderWidth = 0
    }
    
    func setTown(_ townName: String?) {
        town = townName
    }
}
