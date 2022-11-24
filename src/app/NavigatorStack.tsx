import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoListScreen from '../view/screen/TodoListScreen';
import TodoItemDetailScreen from '../view/screen/TodoItemDetailScreen';

const Stack = createNativeStackNavigator();

function NavigatorStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TodoListScreen} />
        <Stack.Screen name="Item" component={TodoItemDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigatorStack;
