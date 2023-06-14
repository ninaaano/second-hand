import styled from 'styled-components';

export const Layout = styled.div`
  & hr {
    width: 95vw;
    background: ${({ theme }) => theme.color.palette.gray500};
    height: 1px;
    border: 0;
  }
`;
