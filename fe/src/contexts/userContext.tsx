import { createContext, useContext, useState } from 'react';
import { User } from '@Types/index';

interface UserContextProps {
  user: User;
  setUserInfo: (userInfo: User) => void;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const userContext = createContext<UserContextProps | null>(null);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({
    userId: 0,
    avatar: '',
    username: '',
  });

  const setUserInfo = (userInfo: User) => {
    setUser(userInfo);
  };

  return (
    <userContext.Provider value={{ user, setUserInfo }}>
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(userContext);

  if (!context) {
    throw new Error('useUserContext should be used within userContextProvider');
  }

  return context;
};
