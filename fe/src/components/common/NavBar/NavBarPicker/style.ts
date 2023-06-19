import styled from 'styled-components';

export const Layout = styled.div`
  width: 46vw;
  height: 3.3vh;
  background: ${({ theme }) => theme.color.palette.gray400};
  border-radius: 8px;
  margin-bottom: 1vh;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.font.fontType.footNote}
`;

export const LeftBox = styled.div<{ isLeft: boolean }>`
  width: 23vw;
  height: 2.9vh;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ isLeft, theme }) =>
    isLeft &&
    `
      background: ${theme.color.palette.white};
      border: 0.5px solid ${theme.color.palette.gray500};
      box-shadow: 2px 3px 3px ${theme.color.palette.gray300},
        1px 2px 4px ${theme.color.palette.gray400};
    `}
`;

export const RightBox = styled.div<{ isLeft: boolean }>`
  width: 23vw;
  height: 2.9vh;
  display: flex;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  ${({ isLeft, theme }) =>
    !isLeft &&
    `
    background: ${theme.color.palette.white};
    border: 0.5px solid ${theme.color.palette.gray500};
    box-shadow: 2px 3px 3px ${theme.color.palette.gray300},
      1px 2px 4px ${theme.color.palette.gray400};
  `}
`;
