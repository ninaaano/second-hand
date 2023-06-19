import { Icon } from '@Components/common/Icon';

import * as S from './style';
export const NavBarModalSearch = () => (
  <S.Layout>
    <S.searchBox>
      <Icon iconType="search" />
      <input type="text" placeholder="동명(읍,면)으로 검색(ex.서초동)" />
    </S.searchBox>
  </S.Layout>
);
