import { Icon } from '@Components/common/Icon';

import * as S from './style';

interface BackBtnProps {
  prev?: string;
  center?: string;
  onClick?: () => void;
  prevHandler?: () => void;
}

export const NavBarBackBtn = ({ prev, center, prevHandler }: BackBtnProps) => (
  <S.Layout>
    <S.IconBox onClick={prevHandler}>
      <Icon iconType="chevronLeft" width={20} />
      <span>{prev}</span>
    </S.IconBox>
    <div>{center}</div>
    <Icon iconType="dots" width={30} />
  </S.Layout>
);
