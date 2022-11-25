import React, { ReactNode } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ContainerContext, ServiceContainer } from './ContainerContext';

export const container = (services: Partial<ServiceContainer>): ServiceContainer => ({
  queryTodoList: jest.fn(),
  queryTodoItem: jest.fn(),
  ...services,
});

const Stack = createNativeStackNavigator();

export const createWrapper = (serviceContainer: Partial<ServiceContainer>) => function Wrapper(
  { children }: { children: ReactNode },
) {
  return (
    <ContainerContext.Provider value={container(serviceContainer)}>
      <NavigationContainer>
        <Stack.Navigator>
          {children}
        </Stack.Navigator>
      </NavigationContainer>
    </ContainerContext.Provider>
  );
};
