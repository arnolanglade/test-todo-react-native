import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ContainerContext, ServiceContainer } from '../ContainerContext';
import IntlProvider, { Translations } from '../i18n/IntlProvider';

export const container = (services: Partial<ServiceContainer>): ServiceContainer => ({
  queryTodoList: jest.fn(),
  queryTodoItem: jest.fn(),
  ...services,
});

export const createWrapper = (serviceContainer: Partial<ServiceContainer>, messages: Translations = {}) => function Wrapper(
  { children }: { children: ReactNode },
) {
  return (
    <ContainerContext.Provider value={container(serviceContainer)}>
      <IntlProvider overriddenTranlations={messages}>
        <NavigationContainer>
          {children}
        </NavigationContainer>
      </IntlProvider>
    </ContainerContext.Provider>
  );
};
