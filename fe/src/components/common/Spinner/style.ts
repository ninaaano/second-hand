import styled, { keyframes } from 'styled-components';

import { SpinnerProps } from '.';

export const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Circle = styled.div`
  align-items: center;
  justify-content: center;

  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.colors.neutralBackgroundBold};
`;

export const Spinner = styled.div.attrs<SpinnerProps>((props) => ({
  style: {
    transform: `translateY(${props.distanceY}px)`,
  },
}))<SpinnerProps>`
  display: flex;
  position: absolute;
  box-sizing: border-box;
  z-index: 1;
  left: 45%;
  width: 35px;
  height: 35px;
  border: 3px solid ${({ theme }) => theme.color.colors.accentBackgroundPrimary};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;
