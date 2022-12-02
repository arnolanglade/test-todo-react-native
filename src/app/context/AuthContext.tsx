import { createContext } from 'react';
import { isLogged } from '../../service/Auth';

export type AuthContainer = {
  isLogged: () => boolean,
};

export const AuthContext = createContext<AuthContainer>({} as AuthContainer);
export const containerAuth = { isLogged };
