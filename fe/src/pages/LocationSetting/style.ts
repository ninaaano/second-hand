import styled, { keyframes } from 'styled-components';

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

const shakeAnimation = keyframes`
  0% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(-2px);
  }
`;

export const AlertNotice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  ${({ theme }) => theme.font.fontType.caption1};
  animation: ${shakeAnimation} 0.1s linear;
`;
