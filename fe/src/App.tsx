import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@Styles/GlobalStyle';
import { theme } from '@Styles/theme';
import { PersistentStorage } from '@Utils/persistentStorage';
import Routers from './router';

export const persistentStorage = new PersistentStorage('JWTToken');

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routers />
  </ThemeProvider>
);

export default App;
