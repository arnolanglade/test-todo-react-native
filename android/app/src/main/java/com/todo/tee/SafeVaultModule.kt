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

class SafeVaultModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
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

        Log.i("SafeVaultModule", "" + valueKey)
    }

    @ReactMethod
    fun checkPin(pin: String) : Boolean {
        return true
    }
}