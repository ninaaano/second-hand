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
            // TODO: failToParse 에러 핸들링
            print("fail to parse \(String(describing: type.self))")
            print(error)
        }
        return result
    }
    
    private func encodeJson<T: Encodable>(data: T) -> Data? {
        var json: Data? = nil
        do {
            json = try JSONEncoder().encode(data)
        } catch {
            // TODO: failToEncode 에러 핸들링
            print("fail to encode \(String(describing: data))")
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
    func requestJWT(with authCode: String) async throws -> String {
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
            
            switch response.statusCode {
            case 200:
                // 등록된 계정 찾음 > final jwt return
                do {
                    let finalJWT = try getJWT(from: data)
                    return finalJWT
                } catch {
                    throw error
                }
            case 302:
                // 등록된 계정 없음 > temp jwt return
                do {
                    let tempJWT = try getJWT(from: data)
                    let tempLocation = TempSignUpPostLocation()
                    let finalJWT = try await postSignUpInfo(tempJWT: tempJWT, data: tempLocation)
                    return finalJWT
                } catch {
                    throw error
                }
            default:
                throw NetworkError.someError
            }
        } catch {
            throw error
        }
    }
    
    func postSignUpInfo<RequestData: Encodable>(
        tempJWT: String,
        data: RequestData
    ) async throws -> String {
        let urlString = APICredential.baseURL + "/signup"
        guard let url = URL(string: urlString) else { throw NetworkError.someError }
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.addValue("Bearer \(tempJWT)", forHTTPHeaderField: "Authorization")
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
                    let finalJWT = try getJWT(from: data)
                    return finalJWT
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
