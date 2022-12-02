import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { View } from 'react-native';
import TodoListScreen from '../view/screen/TodoListScreen';
import TodoItemDetailScreen from '../view/screen/TodoItemDetailScreen';
import { RootStackParamList } from './RootStackListType';
import { useIntl } from './i18n/IntlProvider';
import PinScreen from '../view/screen/PinScreen';

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

function Offline() {
  return (
    <View style={[{ backgroundColor: 'red', height: 100, width: 100 }]} />
  );
}

function NavigatorStack() {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isOnline
          ? (
            <>
              <Stack.Screen name="Tab" component={TabNavigator} />
              <Stack.Screen name="Item" component={TodoItemDetailScreen} />
            </>
          )
          : (
            <Stack.Screen name="Offline" component={Offline} />
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigatorStack;
