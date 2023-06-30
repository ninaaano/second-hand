import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  .product-detail_title {
    ${({ theme }) => theme.font.fontType.headLine};
  }
  .product-detail_conunts,
  .product-detail_category {
    ${({ theme }) => theme.font.fontType.footNote};
    ${({ theme }) => theme.color.colors.neutralTextWeak};
  }
  .product-detail_contents {
    ${({ theme }) => theme.font.fontType.body};
    ${({ theme }) => theme.color.colors.neutralText};
    height: 25vh;
  }
`;
