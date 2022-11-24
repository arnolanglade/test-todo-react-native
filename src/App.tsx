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

import { IntlProvider } from 'react-intl';
import { container, ContainerContext } from './app/ContainerContext';
import NavigatorStack from './app/NavigatorStack';

// Translated messages in French with matching IDs to what you declared
const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
};

function App() {
  return (
    <ContainerContext.Provider value={container}>
      <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
        <NavigatorStack />
      </IntlProvider>
    </ContainerContext.Provider>
  );
}

export default App;
