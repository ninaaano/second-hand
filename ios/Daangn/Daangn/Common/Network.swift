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
}

typealias RequestParameters = [String: String]

final class NetworkManager {
    static let dummyURLString = "https://example.com"
    static let defaultPagingOffSet = 10
    
    private let baseURL = "http://3.38.73.117:8080"
    
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
    
    private func getData<T: Decodable>(
        for urlString: String,
        with query: [String: String]? = nil,
        dataType: T.Type,
        completion: @escaping (Result<T, Error>) -> Void)
    {
        let url: URL?
        if let query {
            guard var urlcomponent = URLComponents(string: urlString) else { return }
            let queryItems = query.map { item in URLQueryItem(name: item.key, value: item.value) }
            urlcomponent.queryItems = queryItems
            url = urlcomponent.url
        } else {
            url = URL(string: urlString)
        }
        guard let url else { return }
        var request = URLRequest(url: url)
        print(request.url)
        request.timeoutInterval = 15
        
        let completionHandler = { @Sendable [weak self] (data: Data?, response: URLResponse?, error: Error?) in
            if let error {
                completion(.failure(error))
                return
            }
            
            guard let response = response as? HTTPURLResponse else {
                print("not http response")
                print(error)
                return
            }
            
            print(response.statusCode)
            dump(response)
            
            guard (200..<400) ~= response.statusCode else {
                completion(.failure(NetworkError.noResponse))
                return
            }
            
            guard let data else {
                completion(.failure(NetworkError.invalidData))
                return
            }
            
            guard let newData = self?.decodeJson(type: dataType, fromJson: data) else { return }
            completion(.success(newData))
        }
        
        let dataTask = session.dataTask(with: request, completionHandler: completionHandler)
        dataTask.resume()
    }
    
    private func authorizedGET<T: Decodable>(
        for urlString: String,
        with query: [String: String] = [:],
        dataType: T.Type,
        completion: @escaping (Result<T, Error>) -> Void)
    {
        let absoulte = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJoeXVuIiwiaWF0IjoxNjg3MDU0ODIxLCJleHAiOjE2ODk2NDY4MjEsInVzZXJJZCI6NCwiYXZhdGFyIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzkxNTI1NDkyP3Y9NCIsInVzZXJuYW1lIjoiZ2hrZGd1czI5IiwicHJpbWFyeUxvY2F0aW9uIjp7ImxvY2F0aW9uSWQiOjEsImRpc3RyaWN0Ijoi7ISc7Jq47IucIiwiY2l0eSI6IuqwleuCqOq1rCIsInRvd24iOiLsl63sgrwx64-ZIn0sInNlY29uZGFyeUxvY2F0aW9uIjp7ImxvY2F0aW9uSWQiOjUsImRpc3RyaWN0Ijoi7ISc7Jq47IucIiwiY2l0eSI6IuqwleuCqOq1rCIsInRvd24iOiLssq3ri7Trj5kifX0.l4gch92HdNt53nPXWHNjRmj-hFANH5P--TQwczozrT4"
        
        let value = "Bearer \(absoulte)"
        
        let url: URL?
        guard var urlcomponent = URLComponents(string: urlString) else { return }
        let queryItems = query.map { item in URLQueryItem(name: item.key, value: item.value) }
        urlcomponent.queryItems = queryItems
        url = urlcomponent.url
        
        guard let url else {
            print("cannot make url")
            return
        }
        
        var request = URLRequest(url: url)
        request.addValue(value, forHTTPHeaderField: "Authorization")
        
        print(request.url)
        request.timeoutInterval = 15
        
        let completionHandler = { @Sendable [weak self] (data: Data?, response: URLResponse?, error: Error?) in
            if let error {
                completion(.failure(error))
                return
            }
            
            guard let response = response as? HTTPURLResponse else {
                print("not http response")
                print(error)
                return
            }
            
            print(response.statusCode)
            
            guard (200..<400) ~= response.statusCode else {
                completion(.failure(NetworkError.noResponse))
                return
            }
            
            guard let data else {
                completion(.failure(NetworkError.invalidData))
                return
            }
            
            let parsing = self?.decodeJson(type: dataType, fromJson: data)
            
            guard let newData = parsing else {
                return
            }
            completion(.success(newData))
        }
        
        let dataTask = session.dataTask(with: request, completionHandler: completionHandler)
        dataTask.resume()
    }
}

// MARK: - Util

extension NetworkManager {
    func getTempJWT(
        with code: String,
        completion: @escaping (String) -> Void
    ) {
        let url = baseURL + "/login"
        var query: RequestParameters = [:]
        query.updateValue(code, forKey: "code")
        query.updateValue("ios", forKey: "clientType")
        
        authorizedGET(for: url, with: query, dataType: Response<String>.self) { result in
            switch result {
            case .success(let response):
                guard let tempJWT = response.data else {
                    print("response is nil")
                    return
                }
                completion(tempJWT)
            case .failure(let error):
                print(error)
            }
        }
    }
    
    func getProducts() {
        let url = baseURL + "/api/products"
        authorizedGET(
            for: url,
            dataType: Response<ProductDTO>.self) { result in
                switch result {
                case .success(let response):
                    dump(response)
                case .failure(let error):
                    print(error)
                }
            }
    }
}
