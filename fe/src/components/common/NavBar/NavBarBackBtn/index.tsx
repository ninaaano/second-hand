import { Icon } from '@Components/common/Icon';

import * as S from './style';

interface BackBtnProps {
  prev?: string;
  center?: string;
  onClick?: () => void;
  handlePrev?: () => void;
  handleModal?: () => void;
}

export const NavBarBackBtn = ({
  prev,
  center,
  handlePrev,
  handleModal,
}: BackBtnProps) => (
  <S.Layout>
    <S.IconBox onClick={handlePrev}>
      <Icon iconType="chevronLeft" width={20} />
      <span>{prev}</span>
    </S.IconBox>
    <div>{center}</div>
    <Icon iconType="ellipsis" fill="black" width={23} onClick={handleModal} />
  </S.Layout>
);
