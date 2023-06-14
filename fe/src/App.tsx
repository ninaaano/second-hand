import { ProductItem } from '@Components/common/ProductList/ProductItem/index';
import { ProductList } from '@Components/common/ProductList/index';
import TabBar from '@Components/common/TabBar';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@Styles/GlobalStyle';
import { theme } from '@Styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ProductList />
  </ThemeProvider>
);

export default App;
