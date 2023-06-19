import { ReactElement } from 'react';

import icons from '@Assets/index';

import { palette } from '@Styles/color';

interface IconProps {
  iconType: keyof typeof icons;
  width?: number;
  height?: number;
  fill?: string;
  onClick?: () => void;
}

export const Icon = ({
  iconType = 'slider',
  width = 16,
  height = width,
  fill = palette.gray50,
  onClick,
}: IconProps): ReactElement => {
  const IconSvg = icons[iconType];

  return (
    <IconSvg width={width} height={height} fill={fill} onClick={onClick} />
  );
};
