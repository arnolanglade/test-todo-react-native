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
import com.facebook.react.bridge.Callback


class SafeVaultModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "SaveVaultModule"

    fun openSharedPreferencesInstance() : SharedPreferences {
        val masterKey: KeyGenParameterSpec = MasterKeys.AES256_GCM_SPEC
        val mainKeyAlias: String = MasterKeys.getOrCreate(masterKey)
        val sharedPrefsFile: String = "encrypted_file"

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

        val valueKey = sharedPreferences.getString("pin", "default")

        //Log.i("SafeVaultModule", "" + valueKey)
    }

    @ReactMethod
    fun checkPin(pin: String,callback: Callback) {
        val sharedPreferences = openSharedPreferencesInstance()

        val savedPin = sharedPreferences.getString("pin", "default")
        Log.i("SafeVaultModule", "Pin retrieved : " + savedPin + " - " + pin)
        Log.i("SafeVaultModule", "Is equals " + savedPin.equals(pin))
        callback.invoke(savedPin.equals(pin))
    }
}