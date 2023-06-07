import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useFetch from '../../../../hooks/useFetch';
import { MILESTONES } from '../../../../constants/api';

import Icon from '../../../common/Icon';
import Button from '../../../common/Button';
import MilestoneTable from '../../MilestoneTable';
import {
  $MilestoneListItem,
  $MilestoneInfo,
  $UpsideInfo,
  $MilestoneName,
  $MilestoneDeadline,
  $MilestoneComment,
  $Buttons,
  $MilestoneProgress,
  $MilestoneControl,
  $ProgressInfo,
  $Percent,
  $Issues,
  $OpenIssue,
  $CloseIssue,
} from './style';

const MilestoneListItem = ({ milestone, getNewMilestoneData }) => {
  const [isEdit, setIsEdit] = useState(false);

  const { fetchData: changeMilestoneStatus } = useFetch(
    MILESTONES.PATCH_MILESTONE(milestone.milestoneId),
    'PATCH',
    {
      isOpened: !milestone.isOpened,
    },
    true,
  );

  const { fetchData: deleteMilestone } = useFetch(
    MILESTONES.DELETE_MILESTONE(milestone.milestoneId),
    'DELETE',
    {},
    true,
  );

  const calculatePercentage = (() => {
    const totalIssues = milestone.openIssue + milestone.closeIssue;

    if (totalIssues === 0) return 0;
    return Math.ceil((milestone.closeIssue / totalIssues) * 100);
  })();

  const editButtonHandler = () => {
    setIsEdit(true);
  };

  const cancelEditHandler = () => {
    setIsEdit(false);
  };

  const changeMilestoneStatusHandler = async () => {
    // TODO: 닫겠습니까? 모달 구현하기.
    await changeMilestoneStatus();
    getNewMilestoneData();
  };

  const deleteMilestoneHandler = async () => {
    // TODO: 마일스톤을 삭제하시겠습니까? 모달 구현.
    await deleteMilestone();
    getNewMilestoneData();
  };

  return isEdit ? (
    <MilestoneTable
      type="edit"
      id={milestone.milestoneId}
      title={milestone.milestoneName}
      deadline={milestone.deadline}
      content={milestone.content}
      cancelClickHandler={cancelEditHandler}
      isOpened={milestone.isOpened}
      getNewMilestoneData={getNewMilestoneData}
    />
  ) : (
    <$MilestoneListItem>
      <$MilestoneInfo>
        <$UpsideInfo>
          <Icon name="milestone" fill="#007AFF" />
          <$MilestoneName>{milestone.milestoneName}</$MilestoneName>
          <$MilestoneDeadline>
            <Icon name="calendar" fill="#6E7191" />
            <div>{milestone.deadline ? milestone.deadline : '완료일이 설정되지 않았습니다.'}</div>
          </$MilestoneDeadline>
        </$UpsideInfo>
        {milestone.content && <$MilestoneComment>{milestone.content}</$MilestoneComment>}
      </$MilestoneInfo>
      <$MilestoneControl>
        <$Buttons>
          {milestone.isOpened ? (
            <Button type="ghost" size="S" onClick={changeMilestoneStatusHandler}>
              <Icon name="archive" fill="#4E4B66" />
              마일스톤 닫기
            </Button>
          ) : (
            <Button type="ghost" size="S" onClick={changeMilestoneStatusHandler}>
              <Icon name="milestone" fill="#4E4B66" />
              마일스톤 열기
            </Button>
          )}

          <Button type="ghost" size="S" onClick={editButtonHandler}>
            <Icon name="edit" fill="#4E4B66" />
            편집
          </Button>
          <Button type="ghost" size="S" onClick={deleteMilestoneHandler}>
            <Icon name="trash" fill="#FF3B30" />
            삭제
          </Button>
        </$Buttons>
        <$MilestoneProgress percent={calculatePercentage} />
        <$ProgressInfo>
          <$Percent>{`${calculatePercentage}%`}</$Percent>
          <$Issues>
            <$OpenIssue>{`열린 이슈 ${milestone.openIssue}`}</$OpenIssue>
            <$CloseIssue>{`닫힌 이슈 ${milestone.closeIssue}`}</$CloseIssue>
          </$Issues>
        </$ProgressInfo>
      </$MilestoneControl>
    </$MilestoneListItem>
  );
};

MilestoneListItem.propTypes = {
  milestone: PropTypes.object.isRequired,
  getNewMilestoneData: PropTypes.func.isRequired,
};

export default MilestoneListItem;
