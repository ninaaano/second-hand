import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5vh 0.3rem 1rem 0 1rem;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 8vh;
  background: ${({ theme }) => theme.color.palette.gray50};
`;

export const SendField = styled.div`
  display: flex;
  gap: 15px;
  padding-top: 10px;
`;
