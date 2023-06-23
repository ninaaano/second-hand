//
//  DTO.swift
//  Daangn
//
//  Created by Effie on 2023/06/20.
//

import Foundation

struct Response<T: Decodable>: Decodable {
    let statusCode: Int
    let message: String
    let data: T?
}

struct ProductDTO: Decodable {
    let products: [Product]?
    let hasNext: Bool
}

struct Product: Decodable {
    let productId: Int
    let title: String
    let price: Int?
    let createdAt: String
    let status: String
    let location: Location
    let watchlistCounts: Int
    let chatroomCounts: Int
    let mainImage: ProductImage?
}

struct Location: Decodable {
    let locationId: Int
    let district: String
    let city: String
    let town: String
}

struct ProductImage: Decodable {
    let productImageId: Int
    let imageUrl: String
}

struct TempSignUpPostLocation: Codable {
    let locationId: Int
    
    init() {
        self.locationId = 1
    }
}
