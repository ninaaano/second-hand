import React from 'react';
import PropTypes from 'prop-types';

import LabelListItem from './LabelListItem';
import { $LabelListMain, $LabelCount, $NoResult } from './style';

const LabelListMain = ({ labels, getNewLabelData }) => {
  const LabelItems = labels.map(({ labelId, labelName, backgroundColor, textColor, content }) => (
    <LabelListItem
      key={labelId}
      labelId={labelId}
      name={labelName}
      backgroundColor={backgroundColor}
      textColor={textColor}
      content={content}
      getNewLabelData={getNewLabelData}
    />
  ));

  return (
    <$LabelListMain>
      <$LabelCount>{`${labels.length}개의 레이블`}</$LabelCount>
      {labels.length === 0 ? <$NoResult>레이블이 없습니다. 새로 추가하세요!</$NoResult> : LabelItems}
    </$LabelListMain>
  );
};

LabelListMain.propTypes = {
  labels: PropTypes.array.isRequired,
  getNewLabelData: PropTypes.func.isRequired,
};

export default LabelListMain;
