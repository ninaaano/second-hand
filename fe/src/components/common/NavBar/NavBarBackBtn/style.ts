import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 3vw 0 3vw;
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

export const IconBox = styled.div`
  display: flex;
  align-items: center;
`;
