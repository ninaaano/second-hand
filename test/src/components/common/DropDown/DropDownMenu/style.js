import styled from 'styled-components';

const $MenuWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.neutral.background.strong};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const $MenuLeftWrapper = styled.div`
  width: 184px;
  display: flex;
  flex-direction: row;
`;

const $MenuImg = styled.img`
  // optional Component
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
`;

const $LabelColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const $MenuText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  // TODO: 선택된 상태면 weight, color 바꿔야함
  font-weight: ${({ $isChecked, theme }) => ($isChecked ? theme.fontWeight.bold : theme.fontWeight.regular)};
  color: ${({ $isChecked, theme }) => {
    return $isChecked ? theme.colors.neutral.text.strong : theme.colors.neutral.text.default;
  }};
`;

export { $MenuWrapper, $MenuLeftWrapper, $MenuImg, $MenuText, $LabelColor };
