//
//  NetworkError.swift
//  Daangn
//
//  Created by Effie on 2023/06/23.
//

import Foundation

enum NetworkError: Error {
    case noResponse
    case invalidData
    case failToPost
    case failToDelete
    case someError
    case noResponseOrNotHTTPResponse
    case failToDecodeJWT
    case failToParse
}
