import { NavigationBar } from '@Components/common/NavBar';
import { ApiErrorBoundary } from '@Error/ApiErrorBoundary';
import { useNavigate } from 'react-router-dom';
import { CategoryList } from '@Components/CategoryList';
import * as S from './style';

export const Category = () => {
  const navigation = useNavigate();
  return (
    <S.Layout>
      <NavigationBar
        type="backBtnLayout"
        prev="닫기"
        center="카테고리"
        prevHandler={() => navigation(-1)}
      />
      <div className="empty" />
      <ApiErrorBoundary>
        <CategoryList />
      </ApiErrorBoundary>
    </S.Layout>
  );
};
