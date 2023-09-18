import { createContext, useContext, useState } from 'react';
import { User } from '@Types/index';

interface UserInfoContextProps {
  userInfo: User;
  updateUserInfo: (userInfo: User) => void;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const userInfoContext = createContext<UserInfoContextProps | null>(null);

export const UserInfoProvider = ({ children }: UserProviderProps) => {
  const [userInfo, setUserInfo] = useState<User>({
    userId: 0,
    avatar: '',
    username: '',
  });

  const updateUserInfo = (userData: User) => {
    setUserInfo(userData);
  };

  return (
    <userInfoContext.Provider value={{ userInfo, updateUserInfo }}>
      {children}
    </userInfoContext.Provider>
  );
};

export const useUserInfoContext = () => {
  const context = useContext(userInfoContext);

  if (!context) {
    throw new Error('useUserContext should be used within userContextProvider');
  }

  return context;
};
