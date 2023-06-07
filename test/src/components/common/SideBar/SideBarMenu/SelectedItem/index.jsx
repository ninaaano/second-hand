import React from 'react';
import PropTypes from 'prop-types';

import { FILTER_TYPE } from '../../../../../constants/dropdownMenu';
import { $Assignee, $Milestone, $LabelWrapper, $ProfileImg, $AssigneeName, $ProgressBar } from './style';
import Label from '../../../Label';

const SelectedItem = ({ className = '', type, info }) => {
  if (FILTER_TYPE[type] === 'label') {
    return (
      <$LabelWrapper className={className}>
        <Label
          height={24}
          name={info.labelName}
          textColor={info.textColor}
          backgroundColor={info.backgroundColor}
        />
      </$LabelWrapper>
    );
  }
  if (FILTER_TYPE[type] === 'assignee') {
    return (
      <$Assignee className={className}>
        <$ProfileImg src={info.url} />
        <$AssigneeName>{info.userName}</$AssigneeName>
      </$Assignee>
    );
  }
  if (FILTER_TYPE[type] === 'milestone') {
    return (
      <$Milestone className={className}>
        <$ProgressBar percent={(info.closeIssue / (info.openIssue + info.closeIssue)) * 100} />
        {info.milestoneName}
      </$Milestone>
    );
  }
  return <div>일치하는 정보가 없습니다.</div>;
};

SelectedItem.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
};

export default SelectedItem;
