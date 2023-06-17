//
//  Category.swift
//  temp-uikit-layout
//
//  Created by Effie on 2023/06/15.
//

import Foundation

enum Category: Int, CaseIterable {
    case all = 0
    case digitalDevice
    case lifeDevice
    case furniture
    case kitchen
    case baby
    case childrenBook
    case womenCloth
    case womenAccessories
    case menFashion
    case cosmetic
    case sports
    case gameAndAlbum
    case car
    case ticket
    case food
    case pet
    case plant
    case etc

    var korean: String {
        switch self {
        case .all: return "모든 카테고리"
        case .digitalDevice: return "디지털기기"
        case .lifeDevice: return "생활가전"
        case .furniture: return "가구/인테리어"
        case .kitchen: return "생활/주방"
        case .baby: return "유아동"
        case .childrenBook: return "유아도서"
        case .womenCloth: return "여성의류"
        case .womenAccessories: return "여성잡화"
        case .menFashion: return "남성패션/잡화"
        case .cosmetic: return "뷰티/미용"
        case .sports: return "스포츠/레저"
        case .gameAndAlbum: return "취미/게임/음반"
        case .car: return "중고차"
        case .ticket: return "티켓/교환권"
        case .food: return "가공식품"
        case .pet: return "반려동물용품"
        case .plant: return "식물"
        case .etc: return "기타 중고물품"
        }
    }
    
    var symbolName: String {
        switch self {
        case .all: return "questionmark.circle"
        case .digitalDevice: return "airpodsmax"
        case .lifeDevice: return "washer"
        case .furniture: return "sofa"
        case .kitchen: return "frying.pan"
        case .baby: return "stroller"
        case .childrenBook: return "book"
        case .womenCloth: return "w.circle"
        case .womenAccessories: return "key.horizontal"
        case .menFashion: return "m.circle"
        case .cosmetic: return "mouth"
        case .sports: return "baseball"
        case .gameAndAlbum: return "gamecontroller"
        case .car: return "car"
        case .ticket: return "swatchpalette"
        case .food: return "face.dashed"
        case .pet: return "pawprint"
        case .plant: return "leaf"
        case .etc: return "shippingbox"
        }
    }
    
    static var onlyCategories: [Category] {
        return Category.allCases.filter { $0 != .all }
    }
}
