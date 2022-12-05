import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackListType';
import Offline from '../../view/screen/OfflineScreen';
import Online from '../../view/screen/OnlineScreen';
import { useAuthentication } from '../auth/AuthContext';

const OnlineStack = createNativeStackNavigator<RootStackParamList>();
const OfflineStack = createNativeStackNavigator<RootStackParamList>();

function OnlineNavigator() {
  return (
    <OnlineStack.Navigator>
      <OnlineStack.Screen options={{ headerShown: false }} name="Online" component={Online} />
    </OnlineStack.Navigator>
  );
}

function OfflineNavigator() {
  return (
    <OfflineStack.Navigator>
      <OfflineStack.Screen options={{ headerShown: false }} name="Offline" component={Offline} />
    </OfflineStack.Navigator>
  );
}

export default function NavigatorStack() {
  const { isLoggedIn } = useAuthentication();

  return (
    <NavigationContainer>
      {isLoggedIn ? <OnlineNavigator /> : <OfflineNavigator />}
    </NavigationContainer>
  );
}
