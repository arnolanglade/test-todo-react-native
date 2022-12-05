import {
  Button, Text, View,
} from 'react-native';
import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuthentication } from '../../app/auth/AuthContext';
import { RootStackParamList } from '../../app/navigation/RootStackListType';

export default function Online() {
  const { logout } = useAuthentication();

  return (
    <View style={[{ height: '100%', width: '100%', justifyContent: 'center' }]}>
      <Text>Welcome!</Text>
      <Button
        title="logout"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
}
