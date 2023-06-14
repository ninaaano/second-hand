import styled from 'styled-components';

export const Box = styled.footer`
  position: relative;
  /* transform: translateY(-100%); */
  padding-top: 0.5vh;
  width: 100vw;
  height: 16.8vw;
  background: ${({ theme }) => theme.color.colors.neutralBackgroundBlur};
`;
