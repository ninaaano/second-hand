import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { LABELS, MILESTONES } from '../../constants/api';

import useFetch from '../../hooks/useFetch';

import LabelListHeader from '../../components/LabelList/LabelListHeader';
import LabelListMain from '../../components/LabelList/LabelListMain';
import { $LabelList } from './style';

const LabelList = (props) => {
  const { fetchData: getLabelData, data: labelData } = useFetch(LABELS.GET_ALL_LABELS);
  const { data: milestoneData } = useFetch(MILESTONES.GET_ALL_MILESTONES);

  const [label, setLabel] = useState([]);
  const allDataLoaded = labelData && milestoneData;

  useEffect(() => {
    if (allDataLoaded) setLabel(labelData);
  }, [labelData, allDataLoaded]);

  const getNewLabelData = async () => {
    await getLabelData();
    setLabel(labelData);
  };

  return (
    allDataLoaded && (
      <$LabelList>
        <LabelListHeader
          labelCount={labelData.length}
          milestoneCount={milestoneData.length}
          getNewLabelData={getNewLabelData}
        />
        <LabelListMain labels={label} getNewLabelData={getNewLabelData} />
      </$LabelList>
    )
  );
};

LabelList.propTypes = {};

export default LabelList;
