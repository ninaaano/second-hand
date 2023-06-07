import styled, { css } from 'styled-components';

const labelFont = css`
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  font-size: ${({ hasValue, isFocused, theme }) => {
    return theme.fontSize[hasValue || isFocused ? 'S' : 'M'].fontSize;
  }};
  line-height: ${({ hasValue, isFocused, theme }) => {
    return theme.fontSize[hasValue || isFocused ? 'S' : 'M'].lineHeight;
  }};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const $Label = styled.label`
  width: 100%;

  ${labelFont}

  transition: 200ms;
`;

const $TextAreaInput = styled.textarea`
  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.colors.neutral.text.strong};
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  line-height: ${({ theme }) => theme.fontSize.M.lineHeight};
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  resize: none;
`;

const $TextLength = styled.div`
  width: 100%;
  height: 20px;

  display: flex;
  justify-content: flex-end;

  color: ${({ theme }) => theme.colors.neutral.text.weak};
  font-size: ${({ theme }) => theme.fontSize.S.fontSize};
  line-height: ${({ theme }) => theme.fontSize.S.lineHeight};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const $filesUploadButtonWrapper = styled.div`
  display: flex;
  gap: 8px;

  width: 100%;
  padding: 10px 0;
  border-top: 1px dashed ${({ theme }) => theme.colors.neutral.border.default};

  color: ${({ theme }) => theme.colors.neutral.text.strong};
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  line-height: ${({ theme }) => theme.fontSize.M.lineHeight};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const $TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: ${({ size }) => {
    if (size === 'S') return '240px';
    if (size === 'L') return '436px';

    return '';
  }};
  padding: 16px;
  border: 1px solid ${({ isFocused, theme }) => (isFocused ? theme.colors.neutral.border.active : 'none')};
  border-radius: 16px;

  background-color: ${({ isFocused, theme }) => {
    return theme.colors.neutral.background[isFocused ? 'strong' : 'bold'];
  }};

  opacity: ${({ disabled }) => (disabled ? 0.32 : 1)};
`;

export { $TextArea, $Label, $filesUploadButtonWrapper, $TextAreaInput, $TextLength };
