//
//  RCTSafeVaultModule.swift
//  todo
//
//  Created by Steve Alves on 01/12/2022.
//

import Foundation

@objc(SafeVaultModule)
class SafeVaultModule: NSObject {
  
  @objc
  func savePin(_ name: String) -> Void {
    print("inside savePin method with \(name)")
  }
  
  @objc
  func checkPin(_ name: String, _ callback: RCTResponseSenderBlock) -> Void {
    print("inside checkPin method with \(name)")
    callback([false])
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    // true : if you want the module to be initialized on the main thread BEFORE any JS executes = initialization time
    // false : initialized on the background thread : LAZY
    return true
  }
  
}
