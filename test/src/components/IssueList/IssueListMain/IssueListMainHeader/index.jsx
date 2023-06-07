import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FILTER_TYPE, FILTER_NAME } from '../../../../constants/dropdownMenu';

import Button from '../../../common/Button';
import Icon from '../../../common/Icon';
import DropDown from '../../../common/DropDown';
import {
  $IssueListMainHeader,
  $CheckBox,
  $IssueStateControls,
  $IssueButtonsWrapper,
  $FilterOptions,
} from './style';

const IssueListMainHeader = ({
  openCount,
  closeCount,
  user,
  label,
  milestone,
  openBtnHandler,
  closeBtnHandler,
  isOpened,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const checkBoxClickHandler = () => {
    setIsSelected((prev) => !prev);
  };

  const openIssueButton = (
    <Button type="ghost" size="M" active={isOpened} onClick={openBtnHandler}>
      <Icon name="alertCircle" />
      <p>{`열린 이슈(${openCount})`}</p>
    </Button>
  );
  const closeIssueButton = (
    <Button type="ghost" size="M" active={!isOpened} onClick={closeBtnHandler}>
      <Icon name="trash" />
      <p>{`닫힌 이슈(${closeCount})`}</p>
    </Button>
  );

  return (
    <$IssueListMainHeader>
      <$IssueStateControls>
        <$CheckBox type="button" onClick={checkBoxClickHandler}>
          <Icon
            name={isSelected ? 'checkBoxActive' : 'checkBoxInitial'}
            fill={isSelected ? '#007AFF' : '#D9DBE9'}
          />
        </$CheckBox>
        {/* { TODO: 조건부 렌더링으로 헤더부분 갈아끼워야함 } */}
        <$IssueButtonsWrapper>
          {openIssueButton}
          {closeIssueButton}
        </$IssueButtonsWrapper>
      </$IssueStateControls>
      <$FilterOptions>
        {/* { TODO: 조건부 렌더링으로 헤더부분 갈아끼워야함 } */}
        <DropDown type={FILTER_TYPE.ASSIGNEE} name={FILTER_NAME.ASSIGNEE} menus={user} position="right" />
        <DropDown type={FILTER_TYPE.LABEL} name={FILTER_NAME.LABEL} menus={label} position="right" />
        <DropDown
          type={FILTER_TYPE.MILESTONE}
          name={FILTER_NAME.MILESTONE}
          menus={milestone}
          position="right"
        />
        <DropDown type={FILTER_TYPE.WRITER} name={FILTER_NAME.WRITER} menus={user} position="right" />
      </$FilterOptions>
    </$IssueListMainHeader>
  );
};

IssueListMainHeader.propTypes = {
  openCount: PropTypes.number,
  closeCount: PropTypes.number,
  user: PropTypes.array.isRequired,
  label: PropTypes.array.isRequired,
  milestone: PropTypes.array.isRequired,
  openBtnHandler: PropTypes.func.isRequired,
  closeBtnHandler: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
};

export default IssueListMainHeader;
