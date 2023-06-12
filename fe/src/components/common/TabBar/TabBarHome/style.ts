import styled from 'styled-components';

interface ItemNameProps {
  isSelected: boolean;
}

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.div`
  display: flex;
  gap: 7px;
  flex-direction: column;
`;

export const ItemName = styled.div<ItemNameProps>`
  display: flex;
  justify-content: center;
  font-weight: 510;
  ${({ theme }) => theme.font.fontType.tab};
  color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.color.colors.neutralTextStrong
      : theme.color.colors.neutralTextWeak};
`;
