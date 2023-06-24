//
//  SignUpTempInfo.swift
//  Daangn
//
//  Created by Effie on 2023/06/23.
//

import Foundation

struct SignUpTempInfo {
    let jwt: JWToken
    
    init(jwt: JWToken) {
        self.jwt = jwt
    }
    
    var imageURLString: String? {
        let key = "imageURLString"
        return jwt.getString(key: key)
    }
    
    var userName: String? {
        let key = "username"
        return jwt.getString(key: key)
    }
}
