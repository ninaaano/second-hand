import styled, { css } from 'styled-components';

export interface ButtonStyleProps {
  buttonType: 'rectangle' | 'circle' | 'ellipse';
  buttonState: 'default' | 'active';
  size?: 'S' | 'M' | 'L';
  textAlign?: 'left' | 'center';
}

export const Button = styled.button<ButtonStyleProps>`
  ${({ theme, buttonType, size }) => {
    if (buttonType === 'rectangle') {
      if (size === 'S') {
        return css`
          width: fit-content;
          height: 4vh;
          padding: 8px 16px;
          ${theme.font.fontType.caption1};
        `;
      }
      if (size === 'M') {
        return css`
          width: 177.5px;
          height: 5.5vh;
          padding: 8px 16px;
          ${theme.font.fontType.callOut};
        `;
      }
      if (size === 'L') {
        return css`
          width: fit-content;
          height: 6.5vh;
          padding: 8px 16px;
          ${theme.font.fontType.headLine};
        `;
      }
    }
    if (buttonType === 'circle') {
      if (size === 'S') {
        return css`
          width: 20px;
          height: 20px;
          ${theme.font.fontType.caption1};
        `;
      }
      if (size === 'M') {
        return css`
          width: 28px;
          height: 28px;
        `;
      }
      if (size === 'L') {
        return css`
          width: 56px;
          height: 56px;
          ${theme.font.fontType.headLine};
        `;
      }
    }
    if (buttonType === 'ellipse') {
      if (size === 'S') {
        return css`
          width: fit-content;
          height: 2.75vh;
          ${theme.font.fontType.caption1};
        `;
      }
      if (size === 'M') {
        return css`
          width: fit-content;
          height: 4vh;
          ${theme.font.fontType.callOut};
        `;
      }
      if (size === 'L') {
        return css`
          width: fit-content;
          height: 4.25vh;
          ${theme.font.fontType.callout};
        `;
      }
    }
  }};

  ${({ theme, buttonState }) =>
    buttonState === 'default'
      ? css`
          color: ${theme.color.colors.accentTextWeak};
          background-color: ${theme.color.colors.neutralBorder};
        `
      : css`
          color: ${theme.color.colors.accentText};
          background-color: ${theme.color.colors.accentBackgroundPrimary};
        `};

  display: flex;
  align-items: center;
  ${({ textAlign }) => css`
    justify-content: ${textAlign === 'center' ? 'center' : 'space-between'};
    ${textAlign === 'center' && `gap: 4px`};
  `}
  ${({ buttonType }) => css`
    border-radius: ${buttonType === 'rectangle' ? '8px' : '50px'};
    padding: ${buttonType !== 'circle' && '8px 16px'};
  `};
  border: none;
`;
