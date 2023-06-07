import React from 'react';
import PropTypes from 'prop-types';

import IconComponents from './IconComponents';

const Icon = ({ name, width = 16, height = 16, fill = '#14142b' }) => {
  const IconComponent = IconComponents[name];

  return <IconComponent width={width} height={height} fill={fill} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

export default Icon;
