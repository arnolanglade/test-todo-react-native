import React from 'react';
import {
  render,
  renderHook, screen,
} from '@testing-library/react-native';
import { Text } from 'react-native';
import { aServiceContainer, createWrapper } from '../testing/WrapperUtils';
import { Translation, useIntl } from './IntlProvider';

describe('Intl module', () => {
  describe('Translation hook', () => {
    it('returns the correct translation depending on the given key', () => {
      const intl = renderHook(
        () => useIntl(),
        { wrapper: createWrapper(aServiceContainer(), { myTranslationKey: 'translation message' }) },
      );

      expect(intl.result.current.translation('myTranslationKey')).toEqual('translation message');
    });

    it('adds a value to the translation', () => {
      const intl = renderHook(
        () => useIntl(),
        { wrapper: createWrapper(aServiceContainer(), { myTranslationKey: 'translation {message}' }) },
      );

      expect(intl.result.current.translation('myTranslationKey', { message: 'here is my value' })).toEqual('translation here is my value');
    });
  });

  describe('Translation component', () => {
    it('renders the correct translation depending on the given key', () => {
      render(
        <Text><Translation id="myTranslationKey" /></Text>,
        { wrapper: createWrapper(aServiceContainer(), { myTranslationKey: 'translation message' }) },
      );

      expect(screen.getByText('translation message')).toBeTruthy();
    });

    it('adds a value to the translation', () => {
      render(
        <Text><Translation id="myTranslationKey" values={{ message: 'here is my value' }} /></Text>,
        { wrapper: createWrapper(aServiceContainer(), { myTranslationKey: 'translation {message}' }) },
      );

      expect(screen.getByText('translation here is my value')).toBeTruthy();
    });
  });
});
