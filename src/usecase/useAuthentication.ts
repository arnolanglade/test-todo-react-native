import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../app/context/AuthContext';

export default function useAuthentication() {
  const { isLogged } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();

  useEffect(() => {
    setIsLoggedIn(isLogged());
  }, []);

  return {
    isLoggedIn,
  };
}
