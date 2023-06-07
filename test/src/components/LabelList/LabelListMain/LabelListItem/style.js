import styled from 'styled-components';

import Button from '../../../common/Button';

const $LabelLayout = styled.div`
  width: 220px;
`;

const $LabelContent = styled.div`
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.fontSize.M.lineHeight};
`;

const $ButtonsLayout = styled.div`
  display: flex;
  gap: 35px;
`;

const $LabelInfo = styled.div`
  display: flex;
  align-items: center;
`;

const $LabelListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;
  padding: 0 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};

  background-color: ${({ theme }) => theme.colors.neutral.background.strong};
`;

export { $LabelListItem, $LabelLayout, $LabelContent, $ButtonsLayout, $LabelInfo };
