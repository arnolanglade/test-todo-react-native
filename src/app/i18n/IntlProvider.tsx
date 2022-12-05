import React, { ReactElement } from 'react';
import { IntlProvider as BaseIntlProvider, useIntl as useBaseIntl, FormattedMessage } from 'react-intl';

export type Translations = Record<string, string>;

const translations: Translations = {
  // Add your translation here
};

export const useIntl = () => {
  const intl = useBaseIntl();

  return {
    translation: (id: string, values: Record<string, string> = {}): string => intl.formatMessage({ id }, values),
  };
};

export default function IntlProvider(
  { children, overriddenTranslations }:{ children: ReactElement, overriddenTranslations?: Translations },
) {
  return (
    <BaseIntlProvider messages={{ ...translations, ...overriddenTranslations }} locale="en" defaultLocale="en">
      {children}
    </BaseIntlProvider>
  );
}

IntlProvider.defaultProps = {
  overriddenTranslations: undefined,
};

export function Translation({ id, values }: { id: string, values?: Record<string, string> }) {
  return <FormattedMessage id={id} values={values} />;
}

Translation.defaultProps = {
  values: {},
};
