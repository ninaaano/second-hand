import styled, { css } from 'styled-components';
interface LayOutProps {
  navBarType: keyof typeof layoutType;
}

export const Layout = styled.header<LayOutProps>`
  position: fixed;
  width: 100vw;
  ${({ theme }) => theme.font.fontType.headLine}
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-end;
  ${({ navBarType }) => layoutType[navBarType]}
  backdrop-filter: blur(4px);
  z-index: 1;
`;

export const layoutType = {
  defaultLayout: css`
    height: 8vh;
    background: ${({ theme }) => theme.color.colors.neutralBackgroundBlur};
    border: 1px solid ${({ theme }) => theme.color.palette.gray200};
  `,
  homeLayout: css`
    height: 8vh;
    background: ${({ theme }) => theme.color.colors.neutralBackgroundBlur};
    border: 1px solid ${({ theme }) => theme.color.palette.gray200};
  `,
  modalLayout: css`
    height: 10vh;
    background: ${({ theme }) => theme.color.palette.black};
  `,
  modalSearchLayout: css`
    height: 16vh;
    background: ${({ theme }) => theme.color.palette.black};
  `,
  backBtnLayout: css`
    height: 8vh;
    background: ${({ theme }) => theme.color.palette.white};
    border: 1px solid ${({ theme }) => theme.color.palette.gray200};
  `,
  segmentPickerLayout: css`
    height: 10vh;
    background: ${({ theme }) => theme.color.palette.white};
    border: 1px solid ${({ theme }) => theme.color.palette.gray200};
  `,
};
