import { Icon } from '@Components/common/Icon';

import * as S from './style';

interface BackBtnProps {
  prev: string;
  center: string;
  right: string;
}

export const NavBarBackBtn = ({ prev, center, right }: BackBtnProps) => (
  <S.Layout>
    <S.IconBox>
      <Icon iconType="chevronLeft" width={20} />
      <span>{prev}</span>
    </S.IconBox>
    <div>{center}</div>
    <div>{right}</div>
  </S.Layout>
);
