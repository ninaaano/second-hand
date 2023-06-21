import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import NotFound from '@Components/common/NotFound';
import { ProductList } from '@Components/common/ProductList';
import { TabBarHome } from '@Components/common/TabBar';
import { useNavigate } from 'react-router-dom';

import useFetch from '@Hooks/useFetch';

import { ProductResponseData } from '@Types/index';

import * as S from './style';

const Home = () => {
  const navigate = useNavigate();
  const { data, status, errorMessage } = useFetch<ProductResponseData>(
    'http://3.38.73.117:8080/api/products?page=0&size=10',
  );

  return (
    <>
      <NavigationBar type={'homeLayout'} title={'title1'} />
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
