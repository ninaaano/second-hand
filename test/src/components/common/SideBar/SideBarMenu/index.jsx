import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FILTER_TYPE, FILTER_NAME } from '../../../../constants/dropdownMenu';
import DropDown from '../../DropDown';

import { $SideBarMenu, $SelectedItem } from './style';

const SideBarMenu = ({ type, menus, selectedItemId }) => {
  const [selectedItem, setSelectedItem] = useState({
    type,
    id: selectedItemId,
  });

  const isSelectedItem = selectedItem.id !== undefined;

  const findSelectItemInfo = () => {
    return menus.filter((menu) => {
      let shouldInclude = false;

      if (FILTER_TYPE[type] === 'label') {
        if (menu.labelId === selectedItem.id) {
          shouldInclude = true;
        }
      }
      if (FILTER_TYPE[type] === 'assignee') {
        if (menu.userId === selectedItem.id) {
          shouldInclude = true;
        }
      }
      if (FILTER_TYPE[type] === 'milestone') {
        if (menu.milestoneId === selectedItem.id) {
          shouldInclude = true;
        }
      }

      return shouldInclude;
    });
  };
  const selectItemInfo = findSelectItemInfo();

  return (
    <$SideBarMenu isSelected={isSelectedItem}>
      <DropDown
        type={FILTER_TYPE[type]}
        name={FILTER_NAME[type]}
        menus={menus}
        width={222}
        dropDownType="sideBar"
        position="center"
        onSelectItem={setSelectedItem}
        isSelectItem={selectedItem.id}
      />
      {isSelectedItem && <$SelectedItem type={type} info={selectItemInfo[0]} />}
    </$SideBarMenu>
  );
};

SideBarMenu.propTypes = {
  type: PropTypes.string.isRequired,
  menus: PropTypes.array.isRequired,
  selectedItemId: PropTypes.any,
};

export default SideBarMenu;
