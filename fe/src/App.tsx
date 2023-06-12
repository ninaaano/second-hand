import { NavigationBar } from '@Components/common/NavigationBar';
import TabBar from '@Components/common/TabBar';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@Styles/GlobalStyle';
import { theme } from '@Styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <NavigationBar />
    <TabBar page={'chat'} />
  </ThemeProvider>
);
export default App;
