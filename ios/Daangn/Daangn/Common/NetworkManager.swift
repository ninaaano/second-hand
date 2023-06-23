//
//  NetworkManager.swift
//  Daangn
//
//  Created by Effie on 2023/06/20.
//

import Foundation

// MARK: NetworkManager

typealias RequestParameters = [String: String]

final class NetworkManager {
    private let session: URLSession
    
    init(session: URLSession = URLSession.shared) {
        self.session = session
    }
    
    private func decodeJson<T: Decodable>(type: T.Type, fromJson data: Data) -> T? {
        var result: T? = nil
        do {
            result = try JSONDecoder().decode(type, from: data)
        } catch {
            print(error)
        }
        return result
    }
    
    private func encodeJson<T: Encodable>(data: T) -> Data? {
        var json: Data? = nil
        do {
            json = try JSONEncoder().encode(data)
        } catch {
            print(error)
        }
        return json
    }
}

extension NetworkManager {
    func getJWT(from data: Data) throws -> String {
        guard let finalJWTResponse = decodeJson(type: Response<String>.self, fromJson: data) else {
            throw NetworkError.failToDecodeJWT
        }
        guard let result = finalJWTResponse.data else {
            throw NetworkError.invalidData
        }
        return result
    }
}

// MARK: - Util

extension NetworkManager {
    func requestJWT(with authCode: String) async throws -> JWToken {
        let urlString = APICredential.baseURL + "/login"
        guard var urlcomponent = URLComponents(string: urlString) else { throw NetworkError.someError }
        var query: RequestParameters = ["code": authCode, "clientType": "ios"]
        let queryItems = query.map { item in URLQueryItem(name: item.key, value: item.value) }
        urlcomponent.queryItems = queryItems
        guard let url = urlcomponent.url else { throw NetworkError.someError }
        var request = URLRequest(url: url)
        request.timeoutInterval = 15
        
        do {
            let (data, response) = try await session.data(for: request)
            
            guard let response = response as? HTTPURLResponse else {
                throw NetworkError.noResponseOrNotHTTPResponse
            }
            
            print(response.statusCode)
            
            let jwtValue = try getJWT(from: data)
            switch response.statusCode {
            case 200: return JWToken(kind: .final, value: jwtValue)
            case 302: return JWToken(kind: .temp, value: jwtValue)
            default:
                throw NetworkError.someError
            }
        } catch {
            throw error
        }
    }
    
    func postSignUpInfo<RequestData: Encodable>(
        tempJWT: JWToken,
        data: RequestData
    ) async throws -> JWToken {
        let urlString = APICredential.baseURL + "/signup"
        guard let url = URL(string: urlString) else { throw NetworkError.someError }
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.addValue("Bearer \(tempJWT.value)", forHTTPHeaderField: "Authorization")
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = encodeJson(data: data)
        request.timeoutInterval = 15
        
        do {
            let (data, response) = try await session.data(for: request)
            
            guard let response = response as? HTTPURLResponse else {
                throw NetworkError.noResponseOrNotHTTPResponse
            }
            
            print(response.statusCode)
            
            switch response.statusCode {
            case 200:
                do {
                    let finalJWTString = try getJWT(from: data)
                    return JWToken(kind: .final, value: finalJWTString)
                } catch {
                    throw error
                }
            case 400:
                throw NetworkError.failToPost
            default:
                throw NetworkError.someError
            }
        } catch {
            throw error
        }
    }
}
