import React from 'react';
import PropTypes from 'prop-types';

import { FILTER_TYPE } from '../../../constants/dropdownMenu';
import SideBarMenu from './SideBarMenu';
import { $SideBar } from './style';

const SideBar = ({ assignees, labels, milestones, selectedItems = {} }) => {
  const menuData = [
    // TODO: 선택된 데이터도 가지고 있어야함.
    {
      menuId: 1,
      menuType: 'ASSIGNEE',
      menus: assignees, // 여기까지는 드롭다운때문에 넣은 데이터
    },
    {
      menuId: 2,
      menuType: 'LABEL',
      menus: labels,
    },
    {
      menuId: 3,
      menuType: 'MILESTONE',
      menus: milestones,
    },
  ];

  return (
    <$SideBar>
      {menuData.map(({ menuId, menuType, menus }) => (
        <SideBarMenu
          key={menuId}
          type={menuType}
          menus={menus}
          selectedItemId={
            Object.keys(selectedItems).length !== 0 ? selectedItems[FILTER_TYPE[menuType]] : undefined
          }
        />
      ))}
    </$SideBar>
  );
};

SideBar.propTypes = {
  assignees: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  milestones: PropTypes.array.isRequired,
  selectedItems: PropTypes.object.isRequired,
};

export default SideBar;
