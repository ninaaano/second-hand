import React from 'react';
import PropTypes from 'prop-types';

import { USERS, LABELS, MILESTONES } from '../../constants/api';

import NewIssueForm from '../../components/NewIssueForm';
import { $Header } from './style';

import useFetch from '../../hooks/useFetch';

const NewIssue = ({ userImgSrc }) => {
  const { data: userData } = useFetch(USERS.GET_ALL_USERS);
  const { data: labelData } = useFetch(LABELS.GET_ALL_LABELS);
  const { data: milestoneData } = useFetch(MILESTONES.GET_ALL_MILESTONES);

  const allDataLoaded = userData && labelData && milestoneData;

  return (
    <React.Fragment>
      <$Header>새로운 이슈 작성</$Header>
      {allDataLoaded && (
        <NewIssueForm
          userImgSrc={userImgSrc}
          userData={userData}
          labelData={labelData}
          milestoneData={milestoneData}
        />
      )}
    </React.Fragment>
  );
};

NewIssue.propTypes = {
  userImgSrc: PropTypes.string.isRequired,
};

export default NewIssue;
