//
//  RCTSafeVaultModule.m
//  todo
//
//  Created by Steve Alves on 01/12/2022.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SafeVaultModule, NSObject)

RCT_EXTERN_METHOD(savePin: (NSString *) name resolve: (RCTPromiseResolveBlock) resolve reject: (RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(checkPin: (NSString *) name resolve: (RCTPromiseResolveBlock) resolve reject: (RCTPromiseRejectBlock) reject)

@end
