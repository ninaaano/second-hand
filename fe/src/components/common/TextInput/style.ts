import styled from 'styled-components';

export const Input = styled.input`
  width: 75vw;
  height: 33px;
  ${({ theme }) => theme.font.fontType.body};
  border: 1px solid ${({ theme }) => theme.color.colors.neutralBackground};
  border-radius: 18px;
  padding-left: 10px;
  color: ${({ theme }) => theme.color.colors.neutralTextWeak};
`;
