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
import Config from 'react-native-config';
import { container, ServiceContainerContext } from './ServiceContainerContext';
import NavigatorStack from './navigation/NavigatorStack';
import IntlProvider from './i18n/IntlProvider';
import { AuthenticationProvider } from './auth/AuthContext';
import StorybookUI from '../../storybook';

const queryClient = new QueryClient();

function App() {
  return (
    <AuthenticationProvider>
      <ServiceContainerContext.Provider value={container}>
        <IntlProvider>
          <QueryClientProvider client={queryClient}>
            <NavigatorStack />
          </QueryClientProvider>
        </IntlProvider>
      </ServiceContainerContext.Provider>
    </AuthenticationProvider>
  );
}

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUI : App;
