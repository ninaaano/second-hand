import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5vh 0.325rem 1.125rem 1.125rem;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 8vh;
  background: ${({ theme }) => theme.color.palette.gray50};
`;

export const Item = styled.div`
  display: flex;
  gap: 0.312rem;
`;
