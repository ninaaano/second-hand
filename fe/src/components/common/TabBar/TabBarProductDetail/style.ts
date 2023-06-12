import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.625rem 1.125rem 1.125rem;
`;

export const Item = styled.div`
  display: flex;
  gap: 0.312rem;
`;

export const ItemName = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.font.fontType.footNote};
`;
