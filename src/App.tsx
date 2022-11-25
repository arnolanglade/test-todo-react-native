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

import { container, ContainerContext } from './app/ContainerContext';
import NavigatorStack from './app/NavigatorStack';
import IntlProvider from './app/i18n/IntlProvider';

function App() {
  return (
    <ContainerContext.Provider value={container}>
      <IntlProvider>
        <NavigatorStack />
      </IntlProvider>
    </ContainerContext.Provider>
  );
}

export default App;
