import styled from 'styled-components';

export const CategoryBox = styled.div`
  display: flex;
  position: fixed;
  top: 8vh;
  padding-left: 5vw;
  gap: 3px;
  height: 8vh;
  width: 100vw;
  align-items: center;
`;

export const TopBox = styled.div`
  height: 15vh;
  background: ${({ theme }) => theme.color.palette.white};
`;

export const BottomBox = styled.div`
  height: 8vh;
  background: ${({ theme }) => theme.color.palette.white};
`;
