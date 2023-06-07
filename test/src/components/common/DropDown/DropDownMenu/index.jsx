import React from 'react';
import PropTypes from 'prop-types';

import {useFilterDispatchContext, useFilterStateContext} from '../../../../context/filterContext';
import {FILTER_ACTION_TYPES} from '../../../../context/filterReducer';

import Icon from '../../Icon';
import {$MenuWrapper, $MenuLeftWrapper, $MenuImg, $MenuText, $LabelColor} from './style';

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

    const isChecked = checkedOption === menuId;
    const menuClickHandler = () => {
        filterDispatch({type: FILTER_ACTION_TYPES.CLICK_MENU, payload: {filterType: menuType, id: menuId}});
    };

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
        <$MenuWrapper type="button" onClick={dropDownType !== 'sideBar' ? menuClickHandler : selectItemHandler}>
            <$MenuLeftWrapper>
                {backgroundColor && <$LabelColor backgroundColor={backgroundColor}/>}
                {menuImg !== null && <$MenuImg src={menuImg}/>}
                <$MenuText $isChecked={dropDownType !== 'sideBar' ? isChecked : isSelectItem === menuId}>
                    {menuText}
                </$MenuText>
            </$MenuLeftWrapper>
            <Icon
                name={dropDownType !== 'sideBar' ? (isChecked ? 'checkOnCircle' : 'checkOffCircle') : (isSelectItem === menuId ? 'checkOnCircle' : 'checkOffCircle')}/>
        </$MenuWrapper>
    );
};

