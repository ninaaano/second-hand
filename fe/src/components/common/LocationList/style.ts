import styled from 'styled-components';

export const Box = styled.ul`
  position: absolute;
  width: 100vw;
  padding: 16px;
  top: 16vh;
  padding: 0 16px 16px 16px;
  width: 90vw;
  z-index: 0;
`;

export const Item = styled.li`
  height: 20px;
  padding: 16px;
  ${({ theme }) => theme.font.fontType.callOut};
  border-bottom: 1px solid ${({ theme }) => theme.color.colors.neutralOverlay};
`;
