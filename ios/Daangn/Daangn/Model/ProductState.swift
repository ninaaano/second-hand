//
//  ProductState.swift
//  temp-uikit-layout
//
//  Created by Effie on 2023/06/14.
//

import UIKit

enum ProductState {
    case sold
    case selling
    case reserved
    
    var korean: String {
        switch self {
        case .sold: return "판매완료"
        case .selling: return "판매중"
        case .reserved: return "예약중"
        }
    }
    
    var color: UIColor? {
        switch self {
        case .sold: return ColorStyle.gray700
        case .selling: return ColorStyle.orange
        case .reserved: return ColorStyle.mint
        }
    }
}
