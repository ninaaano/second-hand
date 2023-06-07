import styled from 'styled-components';

const $IssueListItemWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const $IssueTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  height: 50%;
  padding-top: 10px;
  align-items: center;
`;

const $CheckBox = styled.button`
  margin: 0 32px;
`;

const $IssueTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: ${({ theme }) => theme.colors.neutral.text.strong};
  font-size: ${({ theme }) => theme.fontSize.L.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  & > svg {
    margin-right: 8px;
  }
  & > span {
    margin-right: 8px;
  }
  & > div {
    margin-right: 4px;
  }
`;

const $IssueInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  height: 50%;
  padding-top: 13px;
  margin-left: 80px;

  color: ${({ theme }) => theme.colors.neutral.text.weak};
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const $MileStone = styled.div`
  display: flex;
  gap: 8px;
`;

const $Assignee = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 54px;
  border-radius: 50%;
`;

const $IssueListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};

  background-color: ${({ theme }) => theme.colors.neutral.background.strong};
`;

export {
  $IssueListItem,
  $IssueListItemWrapper,
  $IssueTitleWrapper,
  $IssueTitle,
  $IssueInfo,
  $MileStone,
  $Assignee,
  $CheckBox,
};
