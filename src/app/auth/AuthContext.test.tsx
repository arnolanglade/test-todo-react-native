import {
  renderHook, act,
} from '@testing-library/react-native';
import React, { ReactElement } from 'react';
import { AuthenticationProvider, useAuthentication } from './AuthContext';

const createWrapper = (setIsLoggedIn?: boolean) => function Wrapper(
  { children }: { children: ReactElement },
) {
  return (
    <AuthenticationProvider defaultIsLoggedIn={setIsLoggedIn}>
      {children}
    </AuthenticationProvider>
  );
};

describe('Auth provider', () => {
  it('nobody is logged in by default', () => {
    const { result } = renderHook(
      () => useAuthentication(),
      { wrapper: createWrapper() },
    );

    expect(result.current.isLoggedIn).toEqual(false);
  });
  it('logs in an user', () => {
    const { result } = renderHook(
      () => useAuthentication(),
      { wrapper: createWrapper() },
    );

    act(() => result.current.login());

    expect(result.current.isLoggedIn).toEqual(true);
  });

  it('logs out an user', () => {
    const { result } = renderHook(
      () => useAuthentication(),
      { wrapper: createWrapper(true) },
    );

    act(() => result.current.logout());

    expect(result.current.isLoggedIn).toEqual(false);
  });
});
