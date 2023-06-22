import * as S from './style';
import { Icon } from '../../Icon';

interface NavBarHomeProps {
  town: string | undefined;
}

export const NavBarHome = ({ town }: NavBarHomeProps) => (
  <S.Box>
    <S.AddressBox>
      <span>{town}</span>
      <Icon iconType="chevronDown" />
    </S.AddressBox>
    <S.CategoryBox>
      <Icon iconType="line" />
    </S.CategoryBox>
  </S.Box>
);
