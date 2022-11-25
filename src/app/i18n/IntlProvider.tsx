import React, { ReactElement } from 'react';
import { IntlProvider as BaseIntlProvider } from 'react-intl';

const messages = {
  text: 'This is a test',
};

export default function IntlProvider({ children }:{ children: ReactElement }) {
  return (
    <BaseIntlProvider messages={messages} locale="en" defaultLocale="en">
      {children}
    </BaseIntlProvider>
  );
}
