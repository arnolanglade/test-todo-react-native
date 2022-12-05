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
    
    //2. ENCRYPT DATA WITH KEY
    
    //3. WITH THE NEW KEY, STORE THE KEY ENCRYPTED
    let addquery: [String: Any] = [kSecClass as String: kSecClassGenericPassword,
                                   kSecAttrAccount as String: "pinKey",
                                   kSecAttrService as String: "com.todo.keys",
                                   kSecValueData as String: pin.data(using: .utf8)!,
                                   kSecAttrAccessControl as String: access
    ]
    
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
    print("inside checkPin method with \(pin)")
    resolve(false)
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    // true : if you want the module to be initialized on the main thread BEFORE any JS executes = initialization time
    // false : initialized on the background thread : LAZY
    return true
  }
  
}
