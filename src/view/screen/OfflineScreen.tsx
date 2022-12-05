import { Button, View } from 'react-native';
import * as React from 'react';
import { useAuthentication } from '../../app/auth/AuthContext';

export default function Offline() {
  const { login } = useAuthentication();

  return (
    <View style={[{ height: '100%', width: '100%', justifyContent: 'center' }]}>
      <Button
        title="Se connecter"
        onPress={() => {
          login();
        }}
      />
    </View>
  );
}
