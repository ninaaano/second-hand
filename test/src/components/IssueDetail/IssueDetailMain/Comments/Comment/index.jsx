import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../common/Button';
import Icon from '../../../../common/Icon';
import Label from '../../../../common/Label';
import TextArea from '../../../../common/TextArea';
import {
  $Comment,
  $CommentHeader,
  $UserInfo,
  $HeaderButtons,
  $HeaderButton,
  $CommentText,
  $UserImg,
  $UserName,
  $CommentTime,
  $Buttons,
} from './style';

// TODO: 내 userId -> context로 빼기.
const myId = 6;

const Comment = ({ writerId, commentData }) => {
  const isMine = commentData.commentUser.userId === myId;
  const [isEdited, setIsEdited] = useState(false);
  const [tempComment, setTempComment] = useState(commentData.content);
  const [editComment, setEditComment] = useState(commentData.content);
  const [files, setFiles] = useState([]);

  const commentEditHandler = ({ target }) => {
    setTempComment(target.value);
  };

  const editBtnHandler = () => {
    setIsEdited(true);
  };

  const cancelEditBtnHandler = () => {
    setIsEdited(false);
    setTempComment(commentData.content);
    setEditComment(commentData.content);
  };

  const completeEditHandler = () => {
    setEditComment(tempComment);
    setIsEdited(false);
  };

  const filesUploadHandler = ({ target }) => {
    setFiles([...target.files]);
  };

  return (
    <>
      <$Comment>
        <$CommentHeader>
          <$UserInfo>
            <$UserImg src={commentData.commentUser.url} />
            <$UserName>{commentData.commentUser.userName}</$UserName>
            <$CommentTime>1분 전</$CommentTime>
          </$UserInfo>

          <$HeaderButtons>
            {writerId === commentData.commentUser.userId && (
              <Label height={32} backgroundColor="#D9DBE9" name="작성자" />
            )}
            {isMine && (
              <$HeaderButton onClick={editBtnHandler}>
                <Icon name="edit" />
                <p>편집</p>
              </$HeaderButton>
            )}
            <$HeaderButton>
              <Icon name="smile" />
              <p>반응</p>
            </$HeaderButton>
          </$HeaderButtons>
        </$CommentHeader>
        {isEdited ? (
          <TextArea
            id="commentEdit"
            value={tempComment}
            onChange={commentEditHandler}
            size="S"
            files={files}
            filesUploadHandler={filesUploadHandler}
          />
        ) : (
          <$CommentText>{editComment}</$CommentText>
        )}
      </$Comment>
      {isEdited && (
        <$Buttons>
          <Button type="outline" size="S" onClick={cancelEditBtnHandler}>
            <Icon name="xSquare" />
            <p>편집 취소</p>
          </Button>
          <Button type="contained" size="S" onClick={completeEditHandler}>
            <Icon name="edit" fill="#FEFEFE" />
            <p>편집 완료</p>
          </Button>
        </$Buttons>
      )}
    </>
  );
};

Comment.propTypes = {
  // isMine: PropTypes.bool.isRequired,
  commentData: PropTypes.array.isRequired,
  writerId: PropTypes.number.isRequired,
};

export default Comment;
