import React, { ReactElement } from 'react';
import { IntlProvider as BaseIntlProvider, useIntl as useBaseIntl } from 'react-intl';

type Translations = Record<string, string>;

const messages: Translations = {
  todoListTitle: 'Todo List',
  assigneeTitle: 'Assignees',
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

export const useIntl = () => {
  const intl = useBaseIntl();

  return {
    message: (id: string, values: Record<string, string> = {}): string => intl.formatMessage({ id }, values),
  };
};
