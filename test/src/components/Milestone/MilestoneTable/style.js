import styled from 'styled-components';

const $TableTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.L.fontSize};
  line-height: ${({ theme }) => theme.fontSize.L.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
  margin-bottom: 24px;
`;

const $MilestoneTitleLayout = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  gap: 16px;
`;

const $Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 24px;
  gap: 8px;
`;

const $MilestoneTable = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 284px;
  padding: 36px 32px;
  background-color: ${({ theme }) => theme.colors.neutral.background.strong};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 16px;
`;

export { $MilestoneTable, $TableTitle, $MilestoneTitleLayout, $Buttons };
