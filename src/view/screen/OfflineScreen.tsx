import { Button, View } from 'react-native';
import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../app/navigation/RootStackListType';
import { useAuthentication } from '../../app/auth/AuthContext';

export default function Offline({ navigation }: NativeStackScreenProps<RootStackParamList, 'Offline'>) {
  const { login } = useAuthentication();

  return (
    <View style={[{ height: '100%', width: '100%', justifyContent: 'center' }]}>
      <Button
        title="Se connecter"
        onPress={() => {
          login();
          navigation.navigate('Online');
        }}
      />
    </View>
  );
}
