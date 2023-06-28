import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@Styles/GlobalStyle';
import { theme } from '@Styles/theme';

import { User, UserContextProps } from './types';

export const UserContext = createContext<UserContextProps | null>(null);

const userInitialState = {
  userId: 0,
  avatar: '',
  username: '',
  towns: [],
};

const App = () => {
  const [user, setUser] = useState<User>(userInitialState);

  const setUserInfo = (updatedUserInfo: Partial<User>) => {
    const userInfo = (prevUserInfo: User): User => ({
      ...prevUserInfo,
      ...updatedUserInfo,
    });
    setUser(userInfo);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUserInfo }}>
        <Outlet />
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
