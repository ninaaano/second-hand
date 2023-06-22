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
  const { user } = useContext(UserContext as React.Context<UserContextProps>);

  const navigate = useNavigate();
  const { data, status, errorMessage } = useFetch<ProductResponseData>(
    `${END_POINT.products}?page=0&size=10`,
  );

  return (
    <>
      <NavigationBar
        type={'homeLayout'}
        title={'title1'}
        prev={user?.primaryLocation.town}
      />
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
