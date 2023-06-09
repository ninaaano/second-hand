import { FC, ReactElement } from 'react';

import { palette } from '@Styles/color';

import icons from '@Assets/index';

interface IconProps {
  iconType: keyof typeof icons;
  width?: number;
  height?: number;
  fill?: string;
  onClick?: () => void;
}

export const Icon: FC<IconProps> = ({
  iconType = 'slider',
  width = 16,
  height = width,
  fill = palette.gray50,
  onClick,
}): ReactElement => {
  const IconSvg = icons[iconType];

  return (
    <IconSvg width={width} height={height} fill={fill} onClick={onClick} />
  );
};
