import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.625rem 1.125rem 1.125rem;
  position: fixed;
  bottom: 0;
  width: 93vw;
  height: 5vh;
  background: ${({ theme }) => theme.color.palette.gray50};
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
