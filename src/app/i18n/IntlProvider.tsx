import React, { ReactElement } from 'react';
import { IntlProvider as BaseIntlProvider } from 'react-intl';

type Translations = Record<string, string>;

const messages: Translations = {
  text: 'This is a test',
};

export default function IntlProvider(
  { children, overriddenMessages }:{ children: ReactElement, overriddenMessages?: Translations },
) {
  return (
    <BaseIntlProvider messages={{ ...messages, ...overriddenMessages }} locale="en" defaultLocale="en">
      {children}
    </BaseIntlProvider>
  );
}

IntlProvider.defaultProps = {
  overriddenMessages: undefined,
};
