import styled from 'styled-components';

const $NewIssueFormMain = styled.div`
  display: flex;
  gap: 24px;

  padding: 24px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const $UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const $InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;

const $SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 32px;

  padding: 24px 0;
`;

const $NewIssueForm = styled.form`
  /* display: flex;
  gap: 24px; */
`;

export { $NewIssueForm, $NewIssueFormMain, $UserImg, $InputWrapper, $SubmitButtonWrapper };
