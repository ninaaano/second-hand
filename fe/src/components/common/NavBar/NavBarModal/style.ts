import styled from 'styled-components';

import { palette } from '@Styles/color';

interface ButtonProps {
  isActive?: boolean;
}

interface ButtonProps {
  isActive?: boolean;
}

export const Box = styled.div`
  display: flex;
  justify-content: center;
  padding: 3vh 0 0;
  border-radius: 10px 10px 0px 0px;
  background: ${palette.white};
  width: 100vw;
  & div {
    :last-child,
    :first-child {
      ${({ theme }) => theme.font.fontType.body}
    }
    :nth-child(2) {
      ${({ theme }) => theme.font.fontType.headline}
    }
  }
`;
export const ModalText = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  background: none;
  color: ${({ theme, isActive }) =>
    isActive
      ? theme.color.colors.neutralTextStrong
      : theme.color.colors.neutralTextWeak};
`;
