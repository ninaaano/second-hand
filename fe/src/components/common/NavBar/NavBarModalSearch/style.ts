import styled from 'styled-components';

import { palette } from '@Styles/color';

interface ButtonProps {
  isActive?: boolean;
}

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border-radius: 10px 10px 0px 0px;
  background: ${({ theme }) => theme.color.palette.white};
`;
export const searchBox = styled.div`
  display: flex;
  align-items: center;
  width: 90vw;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.palette.gray400};
  margin-bottom: 10px;
  padding-left: 2vw;
  & input {
    background: none;
    width: 80vw;
    height: 4vh;
    outline: none;
    border: none;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 3vh 0 0;
  border-radius: 10px 10px 0px 0px;
  background: ${palette.white};
  width: 100vw;
`;

export const ModalText = styled.div`
  width: 90vw;
  padding-left: 12px;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  background: none;
  padding: 5px;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  color: ${({ theme, isActive }) =>
    isActive
      ? theme.color.colors.neutralTextStrong
      : theme.color.colors.neutralTextWeak};
`;
