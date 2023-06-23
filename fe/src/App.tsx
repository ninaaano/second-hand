import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@Styles/GlobalStyle';
import { theme } from '@Styles/theme';

import { User, UserContextProps } from './types';

export const UserContext = createContext<UserContextProps | null>(null);

const App = () => {
  const [user, setUser] = useState<User | undefined>();

  const setUserInfo = (user: User | undefined) => {
    setUser(user);
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
