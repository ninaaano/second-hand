import styled from 'styled-components';

import { palette } from '@Styles/color';
export const Layout = styled.div`
  width: 100vw;
  height: 19.6vw;
  background: ${({ theme }) => theme.color.palette.gray500};
  border: 1px solid ${palette.gray300};
  backdrop-filter: blur(4px);
`;
