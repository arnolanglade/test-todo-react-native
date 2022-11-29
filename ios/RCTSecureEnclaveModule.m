//
//  RCTSecureEnclaveModule.m
//  todo
//
//  Created by Steve Alves on 29/11/2022.
//

#import <Foundation/Foundation.h>
#import "RCTSecureEnclaveModule.h"
#import <React/RCTLog.h>

@implementation RCTSecureEnclaveModule

// To export a module named RCTCalendarModule
RCT_EXPORT_METHOD(init:(NSString *)name)
{
  RCTLogInfo(@"Pretending to create an event %@", name);
}

@end
