package com.todo.tee
import android.content.SharedPreferences
import android.security.keystore.KeyGenParameterSpec
import android.util.Log
import androidx.security.crypto.EncryptedSharedPreferences
import androidx.security.crypto.EncryptedSharedPreferences.PrefKeyEncryptionScheme
import androidx.security.crypto.EncryptedSharedPreferences.PrefValueEncryptionScheme
import androidx.security.crypto.MasterKeys
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import org.mindrot.jbcrypt.BCrypt


class SafeVaultModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "SafeVaultModule"

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
    fun savePin(pin: String, promise:Promise) {
        try {
            val sharedPreferences = openSharedPreferencesInstance()
            val hashedPin = BCrypt.hashpw(pin, BCrypt.gensalt())

            sharedPreferences.edit().apply {
                putString("pin", hashedPin)
            }.apply()

            Log.i("SafeVaultModule", "Pin " + pin + " saved")
            Log.i("SafeVaultModule", "Hashed Pin " + hashedPin + " saved")

            promise.resolve(true)
        } catch (e: Throwable) {
            promise.reject(e)
        }
    }

    @ReactMethod
    fun checkPin(pin: String, promise: Promise) {
        try {
            val sharedPreferences = openSharedPreferencesInstance()

            val hashedPin = sharedPreferences.getString("pin", "default")

            Log.i("SafeVaultModule", "Hashed Pin " + hashedPin + " saved")

            promise.resolve(BCrypt.checkpw(pin, hashedPin))
        } catch (e: Throwable) {
            promise.reject(e)
        }
    }
}
