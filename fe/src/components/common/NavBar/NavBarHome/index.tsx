import * as S from './style';
import { Icon } from '../../Icon';
export const NavBarHome = () => (
  <S.Box>
    <S.AddressBox>
      <span>역삼2동</span>
      <Icon iconType="chevronDown" />
    </S.AddressBox>
    <S.CategoryBox>
      <Icon iconType="line" />
    </S.CategoryBox>
  </S.Box>
);
