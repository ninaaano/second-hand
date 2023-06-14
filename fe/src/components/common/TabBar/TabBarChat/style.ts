import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 1rem 0 1rem;
`;

export const SendField = styled.input`
  width: 75vw;
  height: 3.3vh;
  ${({ theme }) => theme.font.fontType.body};
  border: 1px solid ${({ theme }) => theme.color.colors.neutralBackground};
  border-radius: 18px;
  padding-left: 10px;
  color: ${({ theme }) => theme.color.colors.neutralTextWeak};
`;
