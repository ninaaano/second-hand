import styled, { css } from 'styled-components';

const $LabelTableTitle = styled.div`
  color: ${({ theme }) => theme.colors.neutral.text.strong};
  font-size: ${({ theme }) => theme.fontSize.L.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.fontSize.L.lineHeight};
`;

const $LabelPreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 288px;
  height: 153px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 11px;
`;

const $LabelTableInputLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
`;

const $LabelColorInputLayout = styled.div`
  display: flex;
  align-items: center;
  width: 380px;
  gap: 8px;
`;

const $TextColorSelect = styled.select`
  width: 100px;
  margin-left: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const $ColorRandomButton = styled.button`
  width: 24px;
  height: 24px;
`;

const $LabelTableLayout = styled.div`
  display: flex;
  gap: 24px;
`;

const $TableButtonsLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const labelTableBorder = css`
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const labelEditTableBorder = css`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const $LabelTable = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 32px;
  ${({ type }) => (type === 'add' ? labelTableBorder : labelEditTableBorder)}

  background-color: ${({ theme }) => theme.colors.neutral.background.strong};
`;

export {
  $LabelTable,
  $LabelTableTitle,
  $LabelPreview,
  $LabelTableInputLayout,
  $LabelColorInputLayout,
  $TableButtonsLayout,
  $LabelTableLayout,
  $TextColorSelect,
  $ColorRandomButton,
};
