import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MilestoneMainHeader from './MilestoneMainHeader';
import MilestoneListItem from './MilestoneListItem';
import { $MilestoneMain, $NoResult } from './style';

const MilestoneMain = ({ milestoneData, getNewMilestoneData }) => {
  const [isOpenView, setIsOpenView] = useState(true);

  const classifyMilestonesByStatus = () => {
    const openMilestones = [];
    const closedMilestones = [];

    milestoneData.forEach((milestone) => {
      milestone.isOpened ? openMilestones.push(milestone) : closedMilestones.push(milestone);
    });
    return [openMilestones, closedMilestones];
  };

  const openViewBtnHandler = () => {
    setIsOpenView(true);
  };

  const closedViewBtnHandler = () => {
    setIsOpenView(false);
  };

  const [openMilestones, closedMilestones] = classifyMilestonesByStatus();

  const currentViewMilestones = isOpenView ? openMilestones : closedMilestones;

  const noResultMessage = <$NoResult>검색과 일치하는 결과가 없습니다.</$NoResult>;

  return (
    <$MilestoneMain>
      <MilestoneMainHeader
        openCount={openMilestones.length}
        closeCount={closedMilestones.length}
        isOpened={isOpenView}
        openBtnHandler={openViewBtnHandler}
        closeBtnHandler={closedViewBtnHandler}
      />
      {currentViewMilestones.length > 0
        ? currentViewMilestones.map((milestone) => (
            <MilestoneListItem
              key={milestone.milestoneId}
              milestone={milestone}
              getNewMilestoneData={getNewMilestoneData}
            />
          ))
        : noResultMessage}
    </$MilestoneMain>
  );
};

MilestoneMain.propTypes = {
  milestoneData: PropTypes.array.isRequired,
  getNewMilestoneData: PropTypes.func.isRequired,
};

export default MilestoneMain;
