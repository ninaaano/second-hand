import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../common/Button';
import Icon from '../../../common/Icon';
import { $MilestoneMainHeader } from './style';

const MilestoneMainHeader = ({
  openCount = 0,
  closeCount = 0,
  isOpened = true,
  openBtnHandler,
  closeBtnHandler,
}) => {
  const openMilestoneButton = (
    <Button type="ghost" size="M" active={isOpened} onClick={openBtnHandler}>
      <Icon name="milestone" />
      <p>{`열린 마일스톤(${openCount})`}</p>
    </Button>
  );

  const closeMilestoneButton = (
    <Button type="ghost" size="M" active={!isOpened} onClick={closeBtnHandler}>
      <Icon name="archive" />
      <p>{`닫힌 마일스톤(${closeCount})`}</p>
    </Button>
  );

  return (
    <$MilestoneMainHeader>
      {openMilestoneButton}
      {closeMilestoneButton}
    </$MilestoneMainHeader>
  );
};

MilestoneMainHeader.propTypes = {
  openCount: PropTypes.number.isRequired,
  closeCount: PropTypes.number.isRequired,
  isOpened: PropTypes.bool.isRequired,
  openBtnHandler: PropTypes.func.isRequired,
  closeBtnHandler: PropTypes.func.isRequired,
};

export default MilestoneMainHeader;
