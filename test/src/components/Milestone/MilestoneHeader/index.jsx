import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../common/Icon';
import Button from '../../common/Button';
import TabButton from '../../common/TabButton';
import MilestoneAddTable from '../MilestoneTable';
import { $MilestoneHeader, $MilestoneHeaderLayout } from './style';

const MilestoneHeader = ({ labelCount = 0, milestoneCount = 0, getNewMilestoneData }) => {
  const [isAdding, setIsAdding] = useState(false);

  const addMilestoneHandler = () => {
    setIsAdding(true);
  };

  const cancelAddHandler = () => {
    setIsAdding(false);
  };

  const createButton = (() => {
    return isAdding ? (
      <Button type="outline" size="S" onClick={cancelAddHandler}>
        <Icon name="xSquare" />
        닫기
      </Button>
    ) : (
      <Button type="contained" size="S" onClick={addMilestoneHandler}>
        <Icon name="plus" />
        마일스톤 추가
      </Button>
    );
  })();

  return (
    <$MilestoneHeaderLayout>
      <$MilestoneHeader>
        <TabButton labelCount={labelCount} milestoneCount={milestoneCount} currentButton="milestone" />
        {createButton}
      </$MilestoneHeader>
      {isAdding && (
        <MilestoneAddTable getNewMilestoneData={getNewMilestoneData} closeTableHandler={cancelAddHandler} />
      )}
    </$MilestoneHeaderLayout>
  );
};

MilestoneHeader.propTypes = {
  labelCount: PropTypes.number.isRequired,
  milestoneCount: PropTypes.number.isRequired,
  getNewMilestoneData: PropTypes.func.isRequired,
};

export default MilestoneHeader;
