import React, { useState } from 'react';
import {
  Alert,
  Button, Text,
  TextInput,
  View,
} from 'react-native';
import SafeVault from '../../app/safevault/SafeVault';

export default function PinScreen() {
  const [savedPin, setSavedPin] = useState<string>('');
  const [verifyPin, setVerifyPin] = useState<string>('');

  return (
    <View>
      <TextInput onChangeText={(pin) => setSavedPin(pin)} value={savedPin} keyboardType="number-pad" />
      <Button
        title="save"
        onPress={async () => {
          if (savedPin!.trim().length > 0) {
            try {
              await SafeVault.savePin(savedPin);
              Alert.alert('Le pin est sauvé');
            } catch (e) {
              Alert.alert('Erreur côté natif', e?.toString());
            }
          } else {
            Alert.alert('Le pin ne doit pas être vide');
          }
        }}
      />
      <TextInput onChangeText={(pin) => setVerifyPin(pin)} value={verifyPin} keyboardType="number-pad" />
      <Button
        title="verify"
        onPress={async () => {
          try {
            const reponse = await SafeVault.checkPin(verifyPin);
            Alert.alert('ok, la réponse est:', reponse.toString());
          } catch (e) {
            Alert.alert('ko, l\'erreur est', e?.toString());
          }
        }}
      />
    </View>
  );
}
