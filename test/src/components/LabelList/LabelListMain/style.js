import styled, { css } from 'styled-components';

const $LabelCount = styled.div`
  display: flex;
  align-items: center;

  height: 64px;
  padding: 0 32px;
  border-radius: 16px 16px 0 0;

  background-color: ${({ theme }) => theme.colors.neutral.background.default};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  line-height: ${({ theme }) => theme.fontSize.M.lineHeight};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

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

const lastLabelListItemBorder = css`
  & > li:last-child {
    border-radius: 0 0 16px 16px;
    border-bottom: none;
  }
`;

const $LabelListMain = styled.section`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 16px;

  ${lastLabelListItemBorder}
`;

export { $LabelListMain, $LabelCount, $NoResult };
