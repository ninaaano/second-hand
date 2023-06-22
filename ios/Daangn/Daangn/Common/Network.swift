//
//  Network.swift
//  Daangn
//
//  Created by Effie on 2023/06/20.
//

import Foundation

// MARK: NetworkManager

enum NetworkError: Error {
    case noResponse
    case invalidData
    case failToPost
    case failToDelete
    case someError
    case noResponseOrNotHTTPResponse
}

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

// MARK: - Util

extension NetworkManager {
    func requestJWT(
        with authCode: String,
        completion: @escaping (Result<String, Error>) -> Void
    ) {
        let urlString = APICredential.baseURL + "/login"
        guard var urlcomponent = URLComponents(string: urlString) else { return }
        var query: RequestParameters = ["code": authCode, "clientType": "ios"]
        let queryItems = query.map { item in URLQueryItem(name: item.key, value: item.value) }
        urlcomponent.queryItems = queryItems
        guard let url = urlcomponent.url else { return }
        var request = URLRequest(url: url)
        request.timeoutInterval = 15
        
        let completionHandler = { @Sendable [weak self] (data: Data?, response: URLResponse?, error: Error?) in
            if let error {
                print(error)
                return
            }
            
            guard let response = response as? HTTPURLResponse else {
                print("not http response")
                return
            }
            
            print(response.statusCode)
            
            switch response.statusCode {
            case 200:
                // 등록된 계정 찾음 > final jwt return
                guard let data else {
                    print("invalid data")
                    return
                }
                guard let finalToken = self?.getJWT(from: data) else {
                    print("fail to get jwt")
                    return
                }
                
                completion(.success(finalToken))
            case 302:
                // 등록된 계정 없음 > temp jwt return
                guard let data else {
                    print("invalid data")
                    return
                }
                
                guard let tempJWT = self?.getJWT(from: data) else {
                    print("fail to get jwt")
                    return
                }
                
                self?.postSignUpInfo(
                    tempJWT: tempJWT,
                    data: TempSignUpPostLocation(),
                    completion: completion
                )
            default:
                print(response.statusCode, "- no matched process")
                return
            }
        }
        
        let dataTask = session.dataTask(with: request, completionHandler: completionHandler)
        dataTask.resume()
    }
    
    func getJWT(from data: Data) -> String? {
        guard let finalJWTResponse = decodeJson(type: Response<String>.self, fromJson: data) else {
            print("fail to parse temp jwt response")
            return nil
        }
        return finalJWTResponse.data
    }
    
    func postSignUpInfo<RequestData: Encodable>(
        tempJWT: String,
        data: RequestData,
        completion: @escaping (Result<String, Error>) -> Void
    ) {
        let urlString = APICredential.baseURL + "/signup"
        guard let url = URL(string: urlString) else { return }
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.addValue("Bearer \(tempJWT)", forHTTPHeaderField: "Authorization")
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = encodeJson(data: data)
        request.timeoutInterval = 15
        
        let dataTask = session.dataTask(with: request) { [weak self] data, response, error in
            if let error {
                completion(.failure(error))
                return
            }
            
            guard let response = response as? HTTPURLResponse else {
                completion(.failure(NetworkError.noResponse))
                return
            }
            
            print(response.statusCode)
            
            switch response.statusCode {
            case 200:
                guard let data else {
                    print("invalid data")
                    return
                }
                
                guard let finalToken = self?.getJWT(from: data) else {
                    print("fail to get JWT")
                    return
                }
                
                completion(.success(finalToken))
            case 400:
                completion(.failure(NetworkError.failToPost))
                return
            default:
                completion(.failure(NetworkError.someError))
                return
            }
        }
        dataTask.resume()
    }
}
