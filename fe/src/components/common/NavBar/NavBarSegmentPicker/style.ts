import styled from 'styled-components';

export const Layout = styled.div`
  position: fixed;
  width: 100vw;
  ${({ theme }) => theme.font.fontType.headLine}
  backdrop-filter: blur(4px);
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
  height: 10vh;
  padding-top: 3vh;
  background: ${({ theme }) => theme.color.palette.white};
  border: 1px solid ${({ theme }) => theme.color.palette.gray200};
`;
