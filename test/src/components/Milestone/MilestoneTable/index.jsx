import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useFetch from '../../../hooks/useFetch';
import { MILESTONES } from '../../../constants/api';

import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import Icon from '../../common/Icon';
import { $MilestoneTable, $TableTitle, $MilestoneTitleLayout, $Buttons } from './style';

const MilestoneTable = ({
  id = 0,
  title = '',
  deadline = '',
  content = '',
  isOpened = true,
  type = 'add',
  cancelClickHandler,
  getNewMilestoneData,
  closeTableHandler,
}) => {
  // 편집 페이지랑 같이 진행할 수 있도록
  const [milestoneInfo, setMilestoneInfo] = useState({
    title,
    deadline: deadline === null ? '' : deadline,
    content: content === null ? '' : content,
    isOpened,
  });
  const { fetchData: postNewMilestone } = useFetch(
    MILESTONES.GET_ALL_MILESTONES,
    'POST',
    {
      title: milestoneInfo.title,
      deadline: milestoneInfo.deadline,
      content: milestoneInfo.content,
    },
    true,
  );

  const { fetchData: editMilestoneData } = useFetch(
    MILESTONES.PATCH_MILESTONE(id),
    'PATCH',
    {
      title: milestoneInfo.title,
      deadline: milestoneInfo.deadline,
      content: milestoneInfo.content,
      isOpened,
    },
    true,
  );

  const titleChangeHandler = ({ target }) => {
    setMilestoneInfo((prev) => {
      return { ...prev, title: target.value };
    });
  };

  const deadlineChangeHandler = ({ target }) => {
    setMilestoneInfo((prev) => {
      return { ...prev, deadline: target.value };
    });
  };

  const contentChangeHandler = ({ target }) => {
    setMilestoneInfo((prev) => {
      return { ...prev, content: target.value };
    });
  };

  const editCompleteHandler = async () => {
    // TODO: Patch 요청 보내고 성공 시 Get요청 다시 보내서 받아오기.
    await editMilestoneData();
    getNewMilestoneData();
    cancelClickHandler();
  };

  const createNewMilestoneHandler = async () => {
    // TODO: 에러 헨들링
    await postNewMilestone();
    getNewMilestoneData();
    closeTableHandler();
  };

  return (
    <$MilestoneTable>
      <$TableTitle>{type === 'add' ? '새로운 마일스톤 추가' : '마일스톤 편집'}</$TableTitle>
      <$MilestoneTitleLayout>
        <TextInput
          id="titleEdit"
          value={milestoneInfo.title}
          onChange={titleChangeHandler}
          labelText="마일스톤 이름 (필수)"
          placeholderText="입력하세요"
        />
        <TextInput
          id="deadlineEdit"
          value={milestoneInfo.deadline}
          onChange={deadlineChangeHandler}
          labelText="완료일 (선택)"
          placeholderText="YYYY.MM.DD"
        />
      </$MilestoneTitleLayout>
      <TextInput
        id="contentEdit"
        value={milestoneInfo.content}
        onChange={contentChangeHandler}
        labelText="설명 (선택)"
        placeholderText="입력하세요"
      />
      <$Buttons>
        {type === 'add' ? (
          <Button
            type="contained"
            size="S"
            onClick={createNewMilestoneHandler}
            disabled={milestoneInfo.title.length === 0}
          >
            <Icon name="plus" />
            완료
          </Button>
        ) : (
          <>
            <Button type="outline" size="S" onClick={cancelClickHandler}>
              <Icon name="xSquare" />
              취소
            </Button>
            <Button type="contained" size="S" onClick={editCompleteHandler}>
              <Icon name="edit" />
              편집 완료
            </Button>
          </>
        )}
      </$Buttons>
    </$MilestoneTable>
  );
};

MilestoneTable.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  deadline: PropTypes.string,
  content: PropTypes.string,
  isOpened: PropTypes.bool,
  type: PropTypes.string,
  cancelClickHandler: PropTypes.func,
  getNewMilestoneData: PropTypes.func,
  closeTableHandler: PropTypes.func,
};

export default MilestoneTable;
