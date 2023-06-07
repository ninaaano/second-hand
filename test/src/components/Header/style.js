import styled from 'styled-components';

import Icon from '../common/Icon';

const $UserProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const $RightSection = styled.div`
  display: flex;
  gap: 15px;
`;

const $LogoIcon = styled(Icon)`
  fill: ${({ theme }) => theme.colors.neutral.text.default};
`;

const $Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 27px 0;
  margin-bottom: 19px;

  & > a > svg {
    fill: ${({ theme }) => theme.colors.neutral.text.default};
  }
`;

export { $Header, $RightSection, $UserProfile, $LogoIcon };
