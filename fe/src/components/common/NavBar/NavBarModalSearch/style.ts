import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border-radius: 10px 10px 0px 0px;
  background: ${({ theme }) => theme.color.palette.white};
`;

export const searchBox = styled.div`
  display: flex;
  align-items: center;
  width: 90vw;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.palette.gray400};
  margin-bottom: 10px;
  padding-left: 2vw;
  & input {
    background: none;
    width: 80vw;
    height: 4vh;
    outline: none;
    border: none;
  }
`;
