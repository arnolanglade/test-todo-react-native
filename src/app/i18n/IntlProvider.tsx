import React, { ReactElement } from 'react';
import { IntlProvider as BaseIntlProvider, useIntl as useBaseIntl, FormattedMessage } from 'react-intl';

export type Translations = Record<string, string>;

const translation: Translations = {
  todoListTitle: 'Todo Lists',
  assigneeTitle: 'Assignees',
};

export const useIntl = () => {
  const intl = useBaseIntl();

  return {
    message: (id: string, values: Record<string, string> = {}): string => intl.formatMessage({ id }, values),
  };
};

export default function IntlProvider(
  { children, overriddenMessages }:{ children: ReactElement, overriddenMessages?: Translations },
) {
  return (
    <BaseIntlProvider messages={{ ...translation, ...overriddenMessages }} locale="en" defaultLocale="en">
      {children}
    </BaseIntlProvider>
  );
}

IntlProvider.defaultProps = {
  overriddenMessages: undefined,
};

export function Message({ id, values }: { id: string, values?: Record<string, string> }) {
  return <FormattedMessage id={id} values={values} />;
}

Message.defaultProps = {
  values: {},
};
