//
//  ProfileImageButton.swift
//  Daangn
//
//  Created by Effie on 2023/06/16.
//

import UIKit

final class ProfileImageButton: UIView {
    static let viewHeight: CGFloat = 80
    
    private let photoView: UIImageView = {
        let imageView = UIImageView(frame: .zero)
        imageView.backgroundColor = .clear
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
    
    private let button: UIButton = {
        let button = UIButton(frame: .zero)
        button.backgroundColor = ColorStyle.white
        button.setImage(UIImage(systemName: "camera"), for: .normal)
        button.tintColor = ColorStyle.black
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()
    
    var isPhotoSet: Bool = false {
        didSet {
            if isPhotoSet {
                setPhotoSetState()
            } else {
                setEmptyState()
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
        setUI()
    }
    
    private func setLayout() {
        [photoView, button].forEach { view in
            addSubview(view)
            NSLayoutConstraint.activate([
                view.leadingAnchor.constraint(equalTo: self.leadingAnchor),
                view.trailingAnchor.constraint(equalTo: self.trailingAnchor),
                view.topAnchor.constraint(equalTo: self.topAnchor),
                view.bottomAnchor.constraint(equalTo: self.bottomAnchor),
            ])
        }
    }
    
    private func setUI() {
        layer.borderColor = ColorStyle.gray600?.cgColor
        layer.borderWidth = 1
        translatesAutoresizingMaskIntoConstraints = false
        heightAnchor.constraint(equalToConstant: ProfileImageButton.viewHeight).isActive = true
        widthAnchor.constraint(equalToConstant: ProfileImageButton.viewHeight).isActive = true
        setRadius(constant: ProfileImageButton.viewHeight / 2)
    }
    
    private func setPhotoSetState() {
        button.backgroundColor = ColorStyle.gray500?.withAlphaComponent(0.39)
        button.tintColor = ColorStyle.white
    }
    
    private func setEmptyState() {
        button.backgroundColor = ColorStyle.white
        button.tintColor = ColorStyle.black
    }
    
    func setAction(target: Any?, _ action: Selector) {
        button.addTarget(target, action: action, for: .touchUpInside)
    }
    
    func setImage(image: UIImage?) {
        photoView.image = image
        isPhotoSet = true
    }
}
