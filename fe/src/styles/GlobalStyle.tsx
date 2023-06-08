import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { colors } from '@Styles/color';
import { fontType } from '@Styles/font';

export const GlobalStyle = createGlobalStyle`
${reset}
body {
  width: 100%;
  font: inherit;
  color: ${colors.gray900};
  font-family: 'San Francisco', sans-serif;
  ${fontType.body};
}
`;
