import React from 'react';
import {
  render,
  renderHook, screen,
} from '@testing-library/react-native';
import { Text } from 'react-native';
import { container } from '../ContainerContext';
import { createWrapper } from '../testing/WrapperUtils';
import { Translation, useIntl } from './IntlProvider';

describe('Intl Provider', () => {
  it('renders the correct translation', () => {
    const intl = renderHook(
      () => useIntl(),
      { wrapper: createWrapper(container, { mytranslationKey: 'translation message' }) },
    );

    expect(intl.result.current.translation('mytranslationKey')).toEqual('translation message');
  });

  it('renders the correct value', () => {
    const intl = renderHook(
      () => useIntl(),
      { wrapper: createWrapper(container, { mytranslationKey: 'translation {message}' }) },
    );

    expect(intl.result.current.translation('mytranslationKey', { message: 'here is my value' })).toEqual('translation here is my value');
  });

  it('renders the Translation tag', () => {
    render(
      <Text><Translation id="mytranslationKey" /></Text>,
      { wrapper: createWrapper(container, { mytranslationKey: 'translation message' }) },
    );

    expect(screen.getByText('translation message')).toBeTruthy();
  });

  it('renders the Translation tag with value', () => {
    render(
      <Text><Translation id="mytranslationKey" values={{ message: 'here is my value' }} /></Text>,
      { wrapper: createWrapper(container, { mytranslationKey: 'translation {message}' }) },
    );

    expect(screen.getByText('translation here is my value')).toBeTruthy();
  });
});
