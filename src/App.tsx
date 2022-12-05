/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { container, ContainerContext } from './app/ContainerContext';
import NavigatorStack from './app/navigation/NavigatorStack';
import IntlProvider from './app/i18n/IntlProvider';
import { AuthenticationProvider } from './app/auth/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <AuthenticationProvider>
      <ContainerContext.Provider value={container}>
        <IntlProvider>
          <QueryClientProvider client={queryClient}>
            <NavigatorStack />
          </QueryClientProvider>
        </IntlProvider>
      </ContainerContext.Provider>
    </AuthenticationProvider>
  );
}

export default App;
