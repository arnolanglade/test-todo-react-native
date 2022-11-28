import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ContainerContext, ServiceContainer } from '../ContainerContext';
import IntlProvider, { Translations } from '../i18n/IntlProvider';

export const container = (services: Partial<ServiceContainer>): ServiceContainer => ({
  queryTodoList: jest.fn(),
  queryTodoItem: jest.fn(),
  ...services,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 1,
    },
  },
});

export const createWrapper = (serviceContainer: Partial<ServiceContainer>, translations: Translations = {}) => function Wrapper(
  { children }: { children: ReactNode },
) {
  return (
    <ContainerContext.Provider value={container(serviceContainer)}>
      <IntlProvider overriddenTranslations={translations}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            {children}
          </NavigationContainer>
        </QueryClientProvider>
      </IntlProvider>
    </ContainerContext.Provider>
  );
};
