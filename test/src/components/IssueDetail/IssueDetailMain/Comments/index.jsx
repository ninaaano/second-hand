import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import { $Comments } from './style';

const Comments = ({ issue }) => {
  const commentData = issue.comment;

  return (
    <$Comments>
      {commentData.map((comment) => (
        <Comment commentData={comment} writerId={issue.writer.userId} />
      ))}
    </$Comments>
  );
};

Comments.propTypes = {
  issue: PropTypes.object.isRequired,
};

export default Comments;
