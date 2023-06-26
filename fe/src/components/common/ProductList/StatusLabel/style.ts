import styled from 'styled-components';

export const Layout = styled.div`
  color: ${({ theme }) => theme.color.palette.white};
  background: ${({ theme }) => theme.color.palette.mint};
  width: 13vw;
  height: 2.7vh;
  ${({ theme }) => theme.font.fontType.caption1};
  border-radius: 8px;
  display: flex;
  border-radius: 11px;
  align-items: center;
  justify-content: center;
`;
