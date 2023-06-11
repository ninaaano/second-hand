//
//  ImageMapper.swift
//  Daangn
//
//  Created by ilim on 2023/06/08.
//

import UIKit.UIImage

enum ImageMapper: String {
    case house = "house"
    case sellingItemList = "newspaper"
    case heart = "heart"
    case filledHeart = "heart.fill"
    case message = "message"
    case person = "person"
    case setting = "slider.horizontal.3"
    case keyboard = "keyboard.chevron.compact.down"
}

extension ImageMapper {
    func match() -> UIImage? {
        return UIImage(systemName: self.rawValue)
    }
}
