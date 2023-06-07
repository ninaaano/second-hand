import React from 'react';
import PropTypes from 'prop-types';

import Comments from './Comments';
import { $IssueDetailMain } from './style';

const IssueDetailMain = ({ issue }) => {
  return (
    <$IssueDetailMain>
      <Comments issue={issue} />
    </$IssueDetailMain>
  );
};

IssueDetailMain.propTypes = {
  issue: PropTypes.object.isRequired,
};

export default IssueDetailMain;
