import styled from 'styled-components';

import { palette } from '@Styles/color';

interface ButtonProps {
  isActive?: boolean;
}

interface ButtonProps {
  isActive?: boolean;
}

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding: 3vh 0 0;
  border-radius: 10px 10px 0px 0px;
  background: ${palette.white};
  width: 100vw;
  ${({ theme }) => theme.mixin.navBarMixin.commonNavBar({ height: '5vh' })}
  ${({ theme }) => theme.font.fontType.body}
`;
export const ModalText = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
`;

export const ButtonBox = styled.button<ButtonProps>`
  border: none;
  background: none;
  color: ${({ theme }) => theme.color.colors.neutralTextStrong};

  :disabled {
    color: ${({ theme }) => theme.color.colors.neutralTextWeak};
  }
`;
