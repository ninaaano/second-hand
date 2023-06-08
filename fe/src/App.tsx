import styled from 'styled-components';

import { GlobalStyle } from '@Styles/GlobalStyle';
import { colors } from '@Styles/color';

const App = () => {
  const hi = '그래요오ㅗㅇ';

  return (
    <>
      <GlobalStyle />
      <div>{hi}</div>
    </>
  );
};
export default App;
