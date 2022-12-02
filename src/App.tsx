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
import NavigatorStack from './app/NavigatorStack';
import IntlProvider from './app/i18n/IntlProvider';
import { containerAuth, AuthContext } from './app/context/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <AuthContext.Provider value={containerAuth}>
      <ContainerContext.Provider value={container}>
        <IntlProvider>
          <QueryClientProvider client={queryClient}>
            <NavigatorStack />
          </QueryClientProvider>
        </IntlProvider>
      </ContainerContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
