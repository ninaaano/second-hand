import styled from 'styled-components';

const $Assignee = styled.div`
  width: 224px;
  display: flex;
`;

const $ProfileImg = styled.img`
  // optional Component
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
`;

const $LabelWrapper = styled.div`
  width: 224px;
`;

const $AssigneeName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const $Milestone = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 224px;
  color: ${({ theme }) => theme.colors.neutral.text.strong};
  font-size: 12px;
  font-weight: 500;
`;

const $ProgressBar = styled.div`
  margin-bottom: 8px;
  width: 224px;
  height: 8px;
  border-radius: 10px;
  background: linear-gradient(90deg, #007aff ${({ percent }) => `${percent}%`}, #eff0f6 0%);
`;

export { $Assignee, $Milestone, $LabelWrapper, $ProfileImg, $AssigneeName, $ProgressBar };
