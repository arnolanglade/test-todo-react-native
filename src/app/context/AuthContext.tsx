import { createContext } from 'react';

export type AuthContainer = {
  isLogged: () => boolean,
};

export const AuthContext = createContext<AuthContainer>({} as AuthContainer);
export const container = { };
