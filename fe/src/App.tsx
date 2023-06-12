import { NavigationBar } from '@Components/common/NavigationBar/index';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@Styles/GlobalStyle';
import { theme } from '@Styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <NavigationBar />
  </ThemeProvider>
);
export default App;
