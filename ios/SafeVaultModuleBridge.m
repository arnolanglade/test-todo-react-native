//
//  RCTSafeVaultModule.m
//  todo
//
//  Created by Steve Alves on 01/12/2022.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SafeVaultModule, NSObject)

RCT_EXTERN_METHOD(savePin: (NSString *) name)
RCT_EXTERN_METHOD(checkPin: (NSString *) name (RCTResponseSenderBlock) callback)

@end
