import styled, { keyframes } from 'styled-components';

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
