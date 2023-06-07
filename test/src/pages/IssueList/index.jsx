import React from 'react';
import PropTypes from 'prop-types';

import { ISSUES, USERS, LABELS, MILESTONES } from '../../constants/api';

import useFetch from '../../hooks/useFetch';
import { FilterProvider } from '../../context/filterContext';

import IssueListHeader from '../../components/IssueList/IssueListHeader';
import IssueListMain from '../../components/IssueList/IssueListMain';
import { $IssueList } from './style';

const IssueList = () => {
  const { data: issueData } = useFetch(ISSUES.GET_ALL_ISSUES);
  const { data: userData } = useFetch(USERS.GET_ALL_USERS);
  const { data: labelData } = useFetch(LABELS.GET_ALL_LABELS);
  const { data: milestoneData } = useFetch(MILESTONES.GET_ALL_MILESTONES);

  const allDataLoaded = issueData && userData && labelData && milestoneData;

  return (
    <FilterProvider>
      {allDataLoaded && (
        <$IssueList>
          <IssueListHeader labelCount={labelData.length} milestoneCount={milestoneData.length} />
          <IssueListMain
            issues={issueData.issues}
            user={userData}
            label={labelData}
            milestone={milestoneData}
          />
        </$IssueList>
      )}
    </FilterProvider>
  );
};

export default IssueList;
