import styled from 'styled-components';

export const Box = styled.footer`
  position: fixed;
  bottom: 0;
  padding-top: 0.5vh;
  width: 100vw;
  height: 8vh;
  background: ${({ theme }) => theme.color.palette.gray50};
`;
