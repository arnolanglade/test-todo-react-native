import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ServiceContainerContext, ServiceContainer } from '../ServiceContainerContext';
import IntlProvider, { Translations } from '../i18n/IntlProvider';
import { AuthenticationProvider } from '../auth/AuthContext';

export const aServiceContainer = (services: Partial<ServiceContainer> = {}): ServiceContainer => ({
  // Instantiate your services here...
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
    <AuthenticationProvider>
      <ServiceContainerContext.Provider value={aServiceContainer(serviceContainer)}>
        <IntlProvider overriddenTranslations={translations}>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              {children}
            </NavigationContainer>
          </QueryClientProvider>
        </IntlProvider>
      </ServiceContainerContext.Provider>
    </AuthenticationProvider>
  );
};
