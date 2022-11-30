package com.todo.tee
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.util.Log

class SafeVaultModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "SaveVaultModule"

    @ReactMethod
    fun savePin(pin: String) {

        val masterKey: KeyGenParameterSpec = MasterKeys.AES256_GCM_SPEC
        val mainKeyAlias: String = MasterKeys.getOrCreate(masterKey)
        val sharedPrefsFile: String = "encrypted_file"

        val sharedPreferences: SharedPreferences =
            EncryptedSharedPreferences.create(
                sharedPrefsFile,
                mainKeyAlias,
                reactContext,
                PrefKeyEncryptionScheme.AES256_SIV,
                PrefValueEncryptionScheme.AES256_GCM
            )

        sharedPreferences.edit().apply {
            putString("key", "value")
        }.apply()

        val valueKey = sharedPreferences.getString("key", "default")

        log.i("Info : ", valueKey)
    }
}