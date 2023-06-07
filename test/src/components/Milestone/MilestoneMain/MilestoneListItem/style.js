import styled from 'styled-components';

const $MilestoneInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  /* margin-top: 26px; */
  gap: 8px;
`;

const $UpsideInfo = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  gap: 8px;
`;

const $MilestoneName = styled.div`
  text-align: center;
  margin-right: 10px;
  height: 100%;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  line-height: 31px;
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

const $MilestoneDeadline = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.S.fontSize};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  gap: 8px;
  & > div {
    height: 100%;
    line-height: 31px;
  }
`;

const $MilestoneComment = styled.div`
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
`;

const $MilestoneControl = styled.div`
  display: flex;
  flex-direction: column;
`;

const $Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 32px;
  margin-top: 16px;
  gap: 24px;
`;

const $MilestoneProgress = styled.div`
  width: 244px;
  height: 8px;
  margin: 8px 0px;
  border-radius: 10px;
  background: linear-gradient(90deg, #007aff ${({ percent }) => `${percent}%`}, #eff0f6 0%);
`;

const $ProgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.S.fontSize};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
`;

const $Percent = styled.div`
  height: 20px;
`;

const $Issues = styled.div`
  display: flex;
  height: 20px;
  gap: 8px;
`;

const $OpenIssue = styled.div``;

const $CloseIssue = styled.div``;

const $MilestoneListItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 104px;
  padding: 0px 32px;
  background-color: ${({ theme }) => theme.colors.neutral.background.strong};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

export {
  $MilestoneListItem,
  $MilestoneInfo,
  $UpsideInfo,
  $MilestoneName,
  $MilestoneDeadline,
  $MilestoneComment,
  $Buttons,
  $MilestoneProgress,
  $MilestoneControl,
  $ProgressInfo,
  $Percent,
  $Issues,
  $OpenIssue,
  $CloseIssue,
};
