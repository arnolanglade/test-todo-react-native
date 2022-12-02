import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoListScreen from '../view/screen/TodoListScreen';
import TodoItemDetailScreen from '../view/screen/TodoItemDetailScreen';
import { RootStackParamList } from './RootStackListType';
import { useIntl } from './i18n/IntlProvider';
import PinScreen from '../view/screen/PinScreen';
import Offline from '../view/screen/OfflineScreen';
import useAuthentication from '../usecase/useAuthentication';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

function AssigneeListScreen() {
  return null;
}

function TabNavigator() {
  const { translation } = useIntl();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Pin" options={{ tabBarLabel: 'Pin' }} component={PinScreen} />
      <Tab.Screen name="TodoList" options={{ tabBarLabel: translation('todoListTitle') }} component={TodoListScreen} />
      <Tab.Screen name="Assignee" options={{ tabBarLabel: translation('assigneeTitle') }} component={AssigneeListScreen} />
    </Tab.Navigator>
  );
}

function NavigatorStack() {
  const { isLoggedIn } = useAuthentication();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn
          ? (
            <>
              <Stack.Screen name="Tab" component={TabNavigator} />
              <Stack.Screen name="Item" component={TodoItemDetailScreen} />
            </>
          )
          : (
            <Stack.Screen options={{ headerShown: false }} name="Offline" component={Offline} />
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigatorStack;
