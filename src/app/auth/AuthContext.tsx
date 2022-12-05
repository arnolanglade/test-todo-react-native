import React, {
  createContext, ReactElement, useContext, useState,
} from 'react';

export type AuthContainer = {
  isLoggedIn: boolean,
  login: () => void,
  logout: () => void,
};

const AuthContext = createContext<AuthContainer>({} as AuthContainer);

export const useAuthentication = () => useContext(AuthContext);

export function AuthenticationProvider(
  { children, defaultIsLoggedIn }: { children: ReactElement, defaultIsLoggedIn?: boolean },
) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(defaultIsLoggedIn || false);

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  const providerValue = React.useMemo(() => ({
    isLoggedIn, login, logout,
  }), [isLoggedIn]);

  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
}

AuthenticationProvider.defaultProps = {
  defaultIsLoggedIn: false,
};
