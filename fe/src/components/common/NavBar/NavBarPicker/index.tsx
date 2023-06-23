import { useState } from 'react';

import * as S from './style';
interface PickerProps {
  leftLabel: string;
  RightLabel: string;
}

export const NavBarPicker = ({ leftLabel, RightLabel }: PickerProps) => {
  const [isLeft, setIsLeft] = useState(true);

  const handleChange = () => {
    if (isLeft) {
      setIsLeft(false);
    } else {
      setIsLeft(true);
    }
  };
  return (
    <S.Layout>
      <S.LeftBox isLeft={isLeft} onClick={handleChange}>
        {leftLabel}
      </S.LeftBox>
      <S.RightBox isLeft={isLeft} onClick={handleChange}>
        {RightLabel}
      </S.RightBox>
    </S.Layout>
  );
};
