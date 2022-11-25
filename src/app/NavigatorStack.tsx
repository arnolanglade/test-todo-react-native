import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoListScreen from '../view/screen/TodoListScreen';
import TodoItemDetailScreen from '../view/screen/TodoItemDetailScreen';
import { RootStackParamList } from './RootStackListType';
import { useIntl } from './i18n/IntlProvider';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

function AssigneeListScreen() {
  return null;
}

function TabNavigator() {
  const { message } = useIntl();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="TodoList" options={{ tabBarLabel: message('todoListTitle') }} component={TodoListScreen} />
      <Tab.Screen name="Assignee" options={{ tabBarLabel: message('assigneeTitle') }} component={AssigneeListScreen} />
    </Tab.Navigator>
  );
}

function NavigatorStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="Item" component={TodoItemDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigatorStack;
