import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5vh 1rem 1.125rem 1rem;
  position: fixed;
  bottom: 0px;
  width: 92vw;
  height: 8vh;
  background: ${({ theme }) => theme.color.palette.gray50};
`;

export const Item = styled.div`
  display: flex;
  gap: 0.312rem;
`;
