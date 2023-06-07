import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../common/Button';
import Icon from '../common/Icon';
import TextInput from '../common/TextInput';
import TextArea from '../common/TextArea';
import SideBar from '../common/SideBar';
import { $NewIssueForm, $NewIssueFormMain, $UserImg, $InputWrapper, $SubmitButtonWrapper } from './style';

const NewIssueForm = ({ userImgSrc, userData, labelData, milestoneData }) => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const changeTitleHandler = ({ target }) => setTitle(target.value);
  const changeCommentHandler = ({ target }) => setComment(target.value);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const filesUploadHandler = ({ target }) => {
    setFiles([...target.files]);
  };

  const navigateToIssueList = () => navigate('/');

  return (
    <$NewIssueForm onSubmit={submitHandler}>
      <$NewIssueFormMain>
        <$UserImg src={userImgSrc} alt="myImg" />
        <$InputWrapper>
          <TextInput id="issueTitle" value={title} onChange={changeTitleHandler} labelText="제목" />
          <TextArea
            id="issueComment"
            value={comment}
            onChange={changeCommentHandler}
            files={files}
            filesUploadHandler={filesUploadHandler}
            size="L"
          />
        </$InputWrapper>
        <SideBar assignees={userData} labels={labelData} milestones={milestoneData} />
      </$NewIssueFormMain>
      <$SubmitButtonWrapper>
        <Button type="ghost" size="S" onClick={navigateToIssueList}>
          <Icon name="xSquare" />
          <p>작성 취소</p>
        </Button>
        <Button type="contained" size="L" onClick={submitHandler} disabled={title.length === 0}>
          완료
        </Button>
      </$SubmitButtonWrapper>
    </$NewIssueForm>
  );
};

NewIssueForm.propTypes = {
  userImgSrc: PropTypes.string.isRequired,
  userData: PropTypes.array.isRequired,
  labelData: PropTypes.array.isRequired,
  milestoneData: PropTypes.array.isRequired,
};

export default NewIssueForm;
