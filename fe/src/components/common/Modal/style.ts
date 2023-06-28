import styled from 'styled-components';

export const Layout = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100vw;
  align-items: center;
  position: absolute;
  bottom: 2vh;
`;

export const ModifyBox = styled.div`
  width: 90vw;
  border: 1px solid ${({ theme }) => theme.color.colors.neutralBorderStrong};
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.palette.blue};
  background: ${({ theme }) => theme.color.colors.neutralBackgroundWeak};
  & div:first-child {
    width: 90vw;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & div:not(:first-child) {
    width: 90vw;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid
      ${({ theme }) => theme.color.colors.neutralBorderStrong};
  }
`;
