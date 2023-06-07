import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { $TabButton, $Button } from './style';

const TabButton = ({ labelCount = 0, milestoneCount = 0, currentButton = '' }) => {
  const navigate = useNavigate();

  const navigateToLabel = () => navigate('/issues/labels');
  const navigateToMilestone = () => navigate('/issues/milestones');

  const current = {
    label: currentButton === 'label' ? 1 : undefined,
    milestone: currentButton === 'milestone' ? 1 : undefined,
  };

  return (
    <$TabButton>
      <$Button type="ghost" size="M" position="left" onClick={navigateToLabel} current={current.label}>
        <Icon name="label" />
        <p>{`레이블(${labelCount})`}</p>
      </$Button>
      <$Button
        type="ghost"
        size="M"
        position="right"
        onClick={navigateToMilestone}
        current={current.milestone}
      >
        <Icon name="milestone" />
        <p>{`마일스톤(${milestoneCount})`}</p>
      </$Button>
    </$TabButton>
  );
};

TabButton.propTypes = {
  labelCount: PropTypes.number.isRequired,
  milestoneCount: PropTypes.number.isRequired,
  currentButton: PropTypes.string,
};

export default TabButton;
