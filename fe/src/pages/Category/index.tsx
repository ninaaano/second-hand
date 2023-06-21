import { NavigationBar } from '@Components/common/NavBar';

import { CategoryList } from '@Components/CategoryList';

import * as S from './style';
export const Category = () => (
  <S.Layout>
    <NavigationBar type="backBtnLayout" prev="닫기" center="카테고리" />
    <div className="empty" />
    <CategoryList />
  </S.Layout>
);
