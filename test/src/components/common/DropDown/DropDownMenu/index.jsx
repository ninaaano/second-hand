import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useFilterDispatchContext, useFilterStateContext } from '../../../../context/filterContext';
import { FILTER_ACTION_TYPES } from '../../../../context/filterReducer';

import Icon from '../../Icon';
import { $MenuWrapper, $MenuLeftWrapper, $MenuImg, $MenuText, $LabelColor } from './style';

const DropDownMenu = ({
                        menuId,
                        menuType,
                        menuImg = null,
                        menuText,
                        backgroundColor,
                        dropDownType,
                        onSelectItem,
                        isSelectItem,
                      }) => {
  const filterDispatch = useFilterDispatchContext();
  const filterState = useFilterStateContext();
  const checkedOption = filterState[menuType];

  useEffect(() => {
    if (dropDownType !== 'sideBar') {
      const isChecked = checkedOption === menuId;
      const menuClickHandler = () => {
        filterDispatch({ type: FILTER_ACTION_TYPES.CLICK_MENU, payload: { filterType: menuType, id: menuId } });
      };

      const handleClick = () => {
        if (dropDownType !== 'sideBar') {
          menuClickHandler();
        }
      };

      return () => {
        // Cleanup 함수 등록
        if (dropDownType !== 'sideBar') {
          filterDispatch({ type: FILTER_ACTION_TYPES.CLICK_MENU, payload: { filterType: menuType, id: null } });
        }
      };

      // 배열에 의존성 목록 추가
    }
  }, [dropDownType, menuId, menuType, filterDispatch, checkedOption]);

  const selectItemHandler = () => {
    onSelectItem((prev) => {
      if (prev.id === menuId) return {};

      return {
        type: menuType,
        id: menuId,
      };
    });
  };

  return (
      <$MenuWrapper type="button" onClick={dropDownType !== 'sideBar' ? selectItemHandler : undefined}>
        <$MenuLeftWrapper>
          {backgroundColor && <$LabelColor backgroundColor={backgroundColor} />}
          {menuImg !== null && <$MenuImg src={menuImg} />}
          <$MenuText $isChecked={isSelectItem === menuId}>{menuText}</$MenuText>
        </$MenuLeftWrapper>
        <Icon name={isSelectItem === menuId ? 'checkOnCircle' : 'checkOffCircle'} />
      </$MenuWrapper>
  );
};

DropDownMenu.propTypes = {
  menuId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  menuType: PropTypes.string.isRequired,
  menuImg: PropTypes.string,
  menuText: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  dropDownType: PropTypes.string,
  onSelectItem: PropTypes.func,
  isSelectItem: PropTypes.any,
};

export default DropDownMenu;
