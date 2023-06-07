import React from 'react';
import PropTypes from 'prop-types';

import { $Label } from './style';
import Icon from '../Icon';

const Label = ({ height, name, textColor, backgroundColor, iconName }) => {
  // TODO: 옆에 아이콘 넣기 해야함.
  return (
    <$Label height={height} textColor={textColor} backgroundColor={backgroundColor}>
      {iconName && <Icon name={iconName} fill="#FEFEFE" />}
      {name}
    </$Label>
  );
};

Label.propTypes = {
  height: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  iconName: PropTypes.string,
};

export default Label;
