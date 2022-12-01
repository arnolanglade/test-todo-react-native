package com.todo.tee
import android.content.SharedPreferences
import android.security.keystore.KeyGenParameterSpec
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.util.Log
import androidx.security.crypto.EncryptedSharedPreferences
import androidx.security.crypto.EncryptedSharedPreferences.PrefKeyEncryptionScheme
import androidx.security.crypto.EncryptedSharedPreferences.PrefValueEncryptionScheme
import androidx.security.crypto.MasterKeys
import com.facebook.react.bridge.Promise


class SafeVaultModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "SaveVaultModule"

    private fun openSharedPreferencesInstance() : SharedPreferences {
        val masterKey: KeyGenParameterSpec = MasterKeys.AES256_GCM_SPEC
        val mainKeyAlias: String = MasterKeys.getOrCreate(masterKey)
        val sharedPrefsFile: String = "wallet"

        return EncryptedSharedPreferences.create(
                sharedPrefsFile,
                mainKeyAlias,
                reactContext,
                PrefKeyEncryptionScheme.AES256_SIV,
                PrefValueEncryptionScheme.AES256_GCM
            )
    }

    @ReactMethod
    fun savePin(pin: String) {
        val sharedPreferences = openSharedPreferencesInstance()

        sharedPreferences.edit().apply {
            putString("pin", pin)
        }.apply()

        Log.i("SafeVaultModule", "Pin " + pin + " saved")
    }

    @ReactMethod
    fun checkPin(pin: String, promise: Promise) {
        try {
            val sharedPreferences = openSharedPreferencesInstance()

            val savedPin = sharedPreferences.getString("pin", "default")
            promise.resolve(savedPin.equals(pin))
        } catch (e: Throwable) {
            promise.reject(e)
        }
    }
}