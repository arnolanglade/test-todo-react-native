import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackListType';
import Offline from '../view/screen/OfflineScreen';
import Online from '../view/screen/OnlineScreen';
import { useAuthentication } from './auth/AuthContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavigatorStack() {
  const { isLoggedIn } = useAuthentication();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn
          ? (
            <Stack.Screen options={{ headerShown: false }} name="Online" component={Online} />
          )
          : (
            <Stack.Screen options={{ headerShown: false }} name="Offline" component={Offline} />
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
