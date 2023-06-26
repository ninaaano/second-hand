import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import NotFound from '@Components/common/NotFound';
import { ProductList } from '@Components/common/ProductList';
import { TabBarHome } from '@Components/common/TabBar';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import useFetch from '@Hooks/useFetch';

import { ProductResponseData, UserContextProps } from '@Types/index';

import * as S from './style';
import { UserContext } from '../../App';

const Home = () => {
  // TODO(덴): 유저 동네 api 나오면 최초 렌더링시 동네 api로 동네 가져올지, 상태로 관리해서 가져올지 고민하기.
  // TODO(덴): api 붙이면서 리팩토링하기
  const { user } = useContext(UserContext as React.Context<UserContextProps>);
  const navigate = useNavigate();

  const { data, status, errorMessage } = useFetch<ProductResponseData>(
    `${END_POINT.products}?page=0&size=10`,
  );

  return (
    <>
      {user && (
        <NavigationBar
          type={'homeLayout'}
          title={'title1'}
          towns={['강남동']}
        />
      )}
      {status === 'error' && <NotFound errorMessage={errorMessage} />}
      {data && <ProductList itemData={data?.data.products} />}
      <S.ButtonBox>
        <Button
          buttonType="circle"
          buttonState="active"
          size="L"
          iconType="plus"
          onClick={() => navigate('/newproudct')}
        />
      </S.ButtonBox>
      <TabBarHome currentPage="home" />
    </>
  );
};

export default Home;
