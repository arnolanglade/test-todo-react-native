import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackListType';
import Offline from '../../view/screen/OfflineScreen';
import Online from '../../view/screen/OnlineScreen';
import { useAuthentication } from '../auth/AuthContext';

const NativeStack = createNativeStackNavigator<RootStackParamList>();

export default function NavigatorStack() {
  const { isLoggedIn } = useAuthentication();

  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        {isLoggedIn
          ? <NativeStack.Screen options={{ headerShown: false }} name="Online" component={Online} />
          : <NativeStack.Screen options={{ headerShown: false }} name="Offline" component={Offline} />}
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
