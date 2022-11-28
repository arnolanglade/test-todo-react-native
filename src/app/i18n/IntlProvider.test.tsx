import {
  renderHook,
} from '@testing-library/react-native';
import { container } from '../ContainerContext';
import { createWrapper } from '../testing/WrapperUtils';
import { useIntl } from './IntlProvider';

describe('Intl Provider', () => {
  it('renders the todo item details', () => {
    const intl = renderHook(
      () => useIntl(),
      { wrapper: createWrapper(container, { mytranslationKey: 'translation message' }) },
    );

    expect(intl.result.current.translation('mytranslationKey')).toEqual('translation message');
  });

  it('renders the todo item details', () => {
    const intl = renderHook(
      () => useIntl(),
      { wrapper: createWrapper(container, { mytranslationKey: 'translation {message}' }) },
    );

    expect(intl.result.current.translation('mytranslationKey', { message: 'here is my value' })).toEqual('translation here is my value');
  });
});
