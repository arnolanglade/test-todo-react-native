import {
  renderHook, act,
} from '@testing-library/react-native';
import { aServiceContainer, createWrapper } from '../testing/WrapperUtils';
import { useAuthentication } from './AuthContext';

describe('Auth provider', () => {
  it('nobody is logged in by default', () => {
    const { result } = renderHook(
      () => useAuthentication(),
      { wrapper: createWrapper(aServiceContainer()) },
    );

    expect(result.current.isLoggedIn).toEqual(false);
  });
  it('logs in an user', () => {
    const { result } = renderHook(
      () => useAuthentication(),
      { wrapper: createWrapper(aServiceContainer()) },
    );

    act(() => result.current.login());

    expect(result.current.isLoggedIn).toEqual(true);
  });

  it('logs out an user', () => {
    const { result } = renderHook(
      () => useAuthentication(),
      { wrapper: createWrapper(aServiceContainer()) },
    );

    act(() => result.current.logout());

    expect(result.current.isLoggedIn).toEqual(false);
  });
});
