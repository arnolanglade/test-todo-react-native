//
//  RCTSafeVaultModule.swift
//  todo
//
//  Created by Steve Alves on 01/12/2022.
//

import Foundation

@objc(SafeVaultModule)
class SafeVaultModule: NSObject {
  
  enum SafeVaultError: Error {
      case ErrorOnStoreItem
  }
  
  
  @objc
  func savePin(_ pin: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
    print("inside savePin method with \(pin)")
    
    
    //1. CREATE NEW KEY FROM THE SECURE ENCLAVE
    let access = SecAccessControlCreateWithFlags(
      kCFAllocatorDefault,
      kSecAttrAccessibleWhenUnlockedThisDeviceOnly,
      .privateKeyUsage,
      nil
    )!
    
    let attributes: NSDictionary = [
        kSecAttrKeyType: kSecAttrKeyTypeECSECPrimeRandom,
        kSecAttrKeySizeInBits: 256,
        kSecAttrTokenID: kSecAttrTokenIDSecureEnclave,
        kSecPrivateKeyAttrs: [
            kSecAttrIsPermanent: true,
            kSecAttrApplicationTag: "tag",
            kSecAttrAccessControl: access
        ]
    ]
    
    var error: Unmanaged<CFError>?
    guard let privateKey = SecKeyCreateRandomKey(attributes, &error) else {
        let error = error!.takeRetainedValue() as Error
        reject("ERROR_CODE", "Error on generating the private key", error)
        return
    }
    
    print("successfully created the new key \(privateKey)")
    
    //1.5 HASH DATA 
    guard var hashedPassword = BCryptSwift.hashPassword(pin, withSalt: BCryptSwift.generateSalt()) else {
      reject("ERROR_CODE", "Error while saving the key", SafeVaultError.ErrorOnStoreItem)
      return
    }
    
    print("hashed password \(hashedPassword)")
    
    //2. ENCRYPT DATA WITH KEY
    
    //3. WITH THE NEW KEY, STORE THE KEY ENCRYPTED
    //TODO: change key
    let addquery: [String: Any] = [kSecClass as String: kSecClassGenericPassword,
                                   kSecAttrAccount as String: "pinKey",
                                   kSecAttrService as String: "com.todo.keys",
                                   kSecValueData as String: hashedPassword.data(using: .utf8)!,
                                   kSecAttrAccessControl as String: access
    ]
    
    
    //TODO: handle duplicate entry error
    let status = SecItemAdd(addquery as CFDictionary, nil)
    guard status == errSecSuccess else {
      print("Error status : \(status)")
      reject("ERROR_CODE", "Error while saving the key", SafeVaultError.ErrorOnStoreItem)
      return
    }
    
    print("successfully stored the pin \(status)")
    
    resolve(true)
  }
  
  @objc
  func checkPin(_ pin: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
    
    print("pin : \(pin)\n")
    
    let addquery: [String: Any] = [kSecClass as String: kSecClassGenericPassword,
                                   kSecAttrAccount as String: "pinKey",
                                   kSecAttrService as String: "com.todo.keys",
                                   kSecReturnData as String: kCFBooleanTrue ?? false,
                                   kSecMatchLimit as String: kSecMatchLimitOne
    ]
    
    var result: AnyObject?
    
    let status = SecItemCopyMatching(addquery as CFDictionary, &result)
    
    guard status == errSecSuccess else {
      print("Error status : \(status)")
      reject("ERROR_CODE", "Error while matching the key", SafeVaultError.ErrorOnStoreItem)
      return
    }
    
    guard let password = result as? Data else {
      print("Error password undefined")
      resolve(false)
      return
    }
    
    
    let passwordStringified = String(decoding: password, as: UTF8.self)
    
    print("inside checkPin method with \(pin)\n")
    print("Status: \(status) | result : \(passwordStringified)\n")
    
    resolve(pin == passwordStringified)
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    // true : if you want the module to be initialized on the main thread BEFORE any JS executes = initialization time
    // false : initialized on the background thread : LAZY
    return true
  }
  
}
