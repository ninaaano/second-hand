import styled, { css } from 'styled-components';

import Button from '../Button';

const rightPosition = css`
  right: 0;
`;

const leftPosition = css`
  left: 0;
`;

const centerPosition = css`
  left: -12px;
`;

const sideBarStyle = css`
  display: flex;
  justify-content: space-between;
  width: 222px;
`;

const modalPosition = css`
  position: absolute;
  top: calc(100% + ${({ gap }) => `${gap}px`});
  ${({ position }) => {
    if (position === 'right') return rightPosition;
    if (position === 'left') return leftPosition;
    if (position === 'center') return centerPosition;
    return '';
  }}
`;

const $DropDownWrapper = styled.section`
  ${modalPosition}

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  width: 240px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 16px;

  z-index: 1;
`;

const $DropDownButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => (width ? `${width}px` : 'fit-content')};
  height: ${({ height }) => (height ? `${height}px` : 'fit-content')};
`;

const $DropDownButton = styled(Button)`
  gap: ${({ dropDownType }) => (dropDownType === 'sideBar' ? '145px' : '8px')};
  ${({ dropDownType }) => {
    if (dropDownType === 'sideBar') {
      return sideBarStyle;
    }
    return '';
  }}
`;

const $DropDownHeader = styled.header`
  width: 100%;
  height: 36px;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  background-color: ${({ theme }) => theme.colors.neutral.background.bold};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.S.fontSize};
`;

const $DropDownMenus = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const $DropDown = styled.div`
  position: relative;
`;

export {
  $DropDown,
  $DropDownWrapper,
  $DropDownButtonWrapper,
  $DropDownButton,
  $DropDownHeader,
  $DropDownMenus,
};
