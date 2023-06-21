import { Icon } from '@Components/common/Icon';

import * as S from './style';

interface NavBarModalSearchProps {
  prevHandler?: () => void;
}

export const NavBarModalSearch = ({ prevHandler }: NavBarModalSearchProps) => (
  <S.Layout>
    <S.Box>
      <S.ModalText>
        <S.Button onClick={prevHandler} isActive={true}>
          닫기
        </S.Button>
      </S.ModalText>
    </S.Box>
    <S.searchBox>
      <Icon iconType="search" />
      <input type="text" placeholder="동명(읍,면)으로 검색(ex.서초동)" />
    </S.searchBox>
  </S.Layout>
);
