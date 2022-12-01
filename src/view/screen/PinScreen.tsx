import React, { useState } from 'react';
import {
  Button, Text,
  TextInput,
  View,
} from 'react-native';
import SafeVault from '../../app/safevault/SafeVault';

export default function PinScreen() {
  const [savedPin, setSavedPin] = useState<string>();
  const [verifyPin, setVerifyPin] = useState<string>();
  const [isPinVerified, setIsPinVerified] = useState<boolean>();

  return (
    <View>
      <TextInput onChangeText={(pin) => setSavedPin(pin)} value={savedPin} keyboardType="number-pad" />
      <Button title="save" onPress={() => SafeVault.savePin(savedPin)} />
      {isPinVerified && <Text>{isPinVerified ? 'Le pin est bon' : "Le pin n'est pas bon"}</Text>}
      <TextInput onChangeText={(pin) => setVerifyPin(pin)} value={verifyPin} keyboardType="number-pad" />
      <Button
        title="verify"
        onPress={async () => {
          setIsPinVerified(await SafeVault.verifyPin(verifyPin));
        }}
      />
    </View>
  );
}
