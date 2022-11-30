package com.todo.tee
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.util.Log

class SafeVaultModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "TeeModule"

    @ReactMethod
    fun initTee(name: String) {
        Log.d("TeeModule", "Init Tee: $name")
    }
}
