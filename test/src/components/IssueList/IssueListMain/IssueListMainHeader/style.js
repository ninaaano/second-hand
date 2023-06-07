import styled from 'styled-components';

const $CheckBox = styled.button``;

const $IssueStateControls = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const $IssueButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const $FilterOptions = styled.div`
  display: flex;
  gap: 36px;
`;

const $IssueListMainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 64px;
  padding: 0px 32px;
`;

export { $IssueListMainHeader, $CheckBox, $IssueStateControls, $IssueButtonsWrapper, $FilterOptions };
