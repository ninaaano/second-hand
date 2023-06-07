import styled from 'styled-components';

const $IssueDetail = styled.section`
  display: flex;
  flex-direction: column;
`;
const $IssueCommentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 958px;

  & > button {
    margin-top: 24px;
  }
`;

const $IssueDetailMainLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export { $IssueDetail, $IssueCommentArea, $IssueDetailMainLayout };
