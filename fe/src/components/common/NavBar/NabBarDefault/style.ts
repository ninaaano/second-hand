import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.mixin.navBarMixin.commonNavBar({ height: '6.5vh' })}
  padding-bottom: 1.5vh;
`;
