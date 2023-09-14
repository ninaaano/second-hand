import { AuthProvider } from '@Contexts/authContext';
import { UserProvider } from '@Contexts/userContext';
import { UserLocationProvider } from '@Contexts/userTownContext';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@Styles/GlobalStyle';
import { theme } from '@Styles/theme';
import { PersistentStorage } from '@Utils/persistentStorage';

export const persistentStorage = new PersistentStorage('JWTToken');

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AuthProvider storage={persistentStorage}>
      <UserProvider>
        <UserLocationProvider>
          <Outlet />
        </UserLocationProvider>
      </UserProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
