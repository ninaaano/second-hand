import styled from 'styled-components';

export const Layout = styled.div`
  width: 95vw;
  margin: 0 auto;
  & div {
    padding: 8px 0;
    color: ${({ theme }) => theme.color.colors.neutralText};
    ${({ theme }) => theme.font.fontType.callOut};
  }

  & hr {
    width: 95vw;
    background: ${({ theme }) => theme.color.palette.gray500};
    height: 1px;
    border: 0;
  }
`;
