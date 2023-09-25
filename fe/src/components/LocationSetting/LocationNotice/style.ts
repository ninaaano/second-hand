import styled from 'styled-components';

export const Notice = styled.div`
  display: flex;
  flex-direction: column;
  height: 20vh;
  display: flex;
  flex-direction: column;
  height: 30vh;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.font.fontType.headLine};
`;
