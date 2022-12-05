import React, {
  createContext, ReactElement, useContext, useEffect, useState,
} from 'react';

export type AuthContainer = {
  isLoggedIn: boolean,
  login: () => void,
  logout: () => void,
};

const AuthContext = createContext<AuthContainer>({} as AuthContainer);

export const useAuthentication = () => useContext(AuthContext);

export function AuthenticationProvider({ children }: { children: ReactElement }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>;
}
