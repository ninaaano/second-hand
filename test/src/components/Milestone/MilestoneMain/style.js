import styled from 'styled-components';

const $NoResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;

  background-color: ${({ theme }) => theme.colors.neutral.background.strong};

  color: ${({ theme }) => theme.colors.neutral.text.weak};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  line-height: ${({ theme }) => theme.fontSize.M.lineHeight};
`;

const $MilestoneMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  margin-top: 24px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 16px;
  & > div:last-child {
    border-bottom: none;
  }
`;

export { $MilestoneMain, $NoResult };
