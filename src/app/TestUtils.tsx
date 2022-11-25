import React, { ReactNode } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/src/types';
import { ContainerContext, ServiceContainer } from './ContainerContext';
import { RootStackParamList } from './RootStackListType';

export const container = (services: Partial<ServiceContainer>): ServiceContainer => ({
  queryTodoList: jest.fn(),
  queryTodoItem: jest.fn(),
  ...services,
});

export const createWrapper = (serviceContainer: Partial<ServiceContainer>) => function Wrapper(
  { children }: { children: ReactNode },
) {
  return (
    <ContainerContext.Provider value={container(serviceContainer)}>
      <NavigationContainer>
        {children}
      </NavigationContainer>
    </ContainerContext.Provider>
  );
};
