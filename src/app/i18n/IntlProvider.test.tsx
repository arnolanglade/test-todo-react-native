import React from 'react';
import {
  render,
  renderHook, screen,
} from '@testing-library/react-native';
import { Text } from 'react-native';
import { container } from '../ServiceContainerContext';
import { createWrapper } from '../testing/WrapperUtils';
import { Translation, useIntl } from './IntlProvider';

describe('Intl', () => {
  describe('Translation hook', () => {
    it('renders the correct translation', () => {
      const intl = renderHook(
        () => useIntl(),
        { wrapper: createWrapper(container, { myTranslationKey: 'translation message' }) },
      );

      expect(intl.result.current.translation('myTranslationKey')).toEqual('translation message');
    });

    it('renders the correct value', () => {
      const intl = renderHook(
        () => useIntl(),
        { wrapper: createWrapper(container, { myTranslationKey: 'translation {message}' }) },
      );

      expect(intl.result.current.translation('myTranslationKey', { message: 'here is my value' })).toEqual('translation here is my value');
    });
  });

  describe('Translation component', () => {
    it('renders the Translation tag', () => {
      render(
        <Text><Translation id="myTranslationKey" /></Text>,
        { wrapper: createWrapper(container, { myTranslationKey: 'translation message' }) },
      );

      expect(screen.getByText('translation message')).toBeTruthy();
    });

    it('renders the Translation tag with value', () => {
      render(
        <Text><Translation id="myTranslationKey" values={{ message: 'here is my value' }} /></Text>,
        { wrapper: createWrapper(container, { myTranslationKey: 'translation {message}' }) },
      );

      expect(screen.getByText('translation here is my value')).toBeTruthy();
    });
  });

  it('renders the todo item details', () => {
    const intl = renderHook(
      () => useIntl(),
      { wrapper: createWrapper(container, { myTranslationKey: 'translation {message}' }) },
    );

    expect(intl.result.current.translation('myTranslationKey', { message: 'here is my value' })).toEqual('translation here is my value');
  });
});
