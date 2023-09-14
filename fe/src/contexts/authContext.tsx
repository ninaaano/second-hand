import { authLogin, authSignUp } from '@Apis/authApi';
import { createContext, useContext } from 'react';
import useFetch from '@Hooks/useFetch';
import { PersistentStorage } from '@Utils/persistentStorage';
import { apiStutus } from '@Types/index';

interface AuthData {
  code: string;
  message: string;
  data: string;
}

interface AuthContextProps {
  authInfo: AuthData | undefined;
  authApiStatus: apiStutus;
  login: () => void;
  signUp: (locationId: number) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
  storage: PersistentStorage;
}

export const authContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children, storage }: AuthProviderProps) => {
  const { data: authInfo, status: authApiStatus, fetch } = useFetch<AuthData>();

  const login = () => {
    fetch({ callback: authLogin });
  };

  const signUp = (locationId: number) => {
    fetch({ callback: () => authSignUp(locationId) });
  };

  if (authInfo) {
    const JWTToken = authInfo.data;
    storage.set(JWTToken);
  }

  return (
    <authContext.Provider value={{ authInfo, authApiStatus, login, signUp }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(authContext);

  if (!context) {
    throw new Error('useAuthContext should be used within authContextProvider');
  }

  return context;
};
