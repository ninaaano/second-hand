import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import FilterBar from './FilterBar';
import Button from '../../common/Button';
import TabButton from '../../common/TabButton';
import Icon from '../../common/Icon';
import { $IssueListHeader, $Nav } from './style';

const IssueListHeader = ({ labelCount, milestoneCount }) => {
  const navigate = useNavigate();

  const navigateToNewIssue = () => navigate('/issues/new');

  return (
    <$IssueListHeader>
      <FilterBar />
      <$Nav>
        <TabButton labelCount={labelCount} milestoneCount={milestoneCount} />
        <Button type="contained" size="S" onClick={navigateToNewIssue}>
          <Icon name="plus" />
          이슈 작성
        </Button>
      </$Nav>
    </$IssueListHeader>
  );
};

IssueListHeader.propTypes = {
  labelCount: PropTypes.number.isRequired,
  milestoneCount: PropTypes.number.isRequired,
};

export default IssueListHeader;
