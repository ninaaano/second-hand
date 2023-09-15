import styled from 'styled-components';

export const Layout = styled.div`
  ${({ theme }) =>
    theme.mixin.navBarMixin.commonNavBar({
      height: '10vh',
      alignItems: 'center',
    })}
  flex-direction: column;
  justify-content: flex-end;
`;
