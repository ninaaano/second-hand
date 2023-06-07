import styled from 'styled-components';

const $NoResultMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 0 0 16px 16px;

  background-color: ${({ theme }) => theme.colors.neutral.background.strong};

  color: ${({ theme }) => theme.colors.neutral.text.weak};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  line-height: ${({ theme }) => theme.fontSize.M.lineHeight};
`;

const $IssueList = styled.ul`
  display: flex;
  flex-direction: column;

  & > li:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  }

  & > li:last-child {
    border-radius: 0 0 16px 16px;
  }
`;

const $IssueListMain = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 24px;

  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 16px;
`;

export { $IssueList, $NoResultMessage, $IssueListMain };
