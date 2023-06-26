import styled from 'styled-components';

export const Layout = styled.div`
  width: 100vw;
  position: fixed;
  top: 8vh;
`;

export const Notice = styled.div`
  display: flex;
  flex-direction: column;
  height: 20vh;
  display: flex;
  flex-direction: column;
  height: 30vh;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.font.fontType.headLine};
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 2vw;
`;
