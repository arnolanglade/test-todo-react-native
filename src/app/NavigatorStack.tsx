import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoListScreen from '../view/screen/TodoListScreen';
import TodoItemDetailScreen from '../view/screen/TodoItemDetailScreen';
import { RootStackParamList } from './RootStackListType';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AssigneeListScreen() {
  return null;
}

function NavigatorStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen name="Item" component={TodoItemDetailScreen} />
        <Stack.Screen name="Assignee" component={AssigneeListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigatorStack;
