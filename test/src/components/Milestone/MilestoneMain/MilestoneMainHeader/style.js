import styled from 'styled-components';

const $MilestoneMainHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding-left: 32px;
  background-color: ${({ theme }) => theme.colors.neutral.background.default};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  gap: 24px;
`;

export { $MilestoneMainHeader };
