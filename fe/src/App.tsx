import { NavigationBar } from '@Components/common/NavBar/index';
import TabBar from '@Components/common/TabBar';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@Styles/GlobalStyle';
import { theme } from '@Styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <TabBar page={'chat'} />
    <NavigationBar type={'homeLayout'} />
    <NavigationBar type={'modalLayout'} />
    <NavigationBar type={'modalSearchLayout'} />
    <NavigationBar type={'backBtnLayout'} />
    <NavigationBar type={'segmentPickerLayout'} />
  </ThemeProvider>
);
export default App;
