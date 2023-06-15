import styled from 'styled-components';

export const Layout = styled.div`
  & hr {
    width: 95vw;
    background: ${({ theme }) => theme.color.palette.gray500};
    height: 1px;
    border: 0;
  }
`;

export const TopBox = styled.div`
  height: 8vh;
  background: ${({ theme }) => theme.color.palette.white};
`;

export const BottomBox = styled.div`
  height: 16.8vh;
  background: ${({ theme }) => theme.color.palette.white};
`;
