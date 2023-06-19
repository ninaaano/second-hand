import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import NotFound from '@Components/common/NotFound';
import { ProductList } from '@Components/common/ProductList';
import { TabBarHome } from '@Components/common/TabBar';

import useFetch from '@Hooks/useFetch';

import { ProductResponseData } from '@Types/index';

import * as S from './style';

const Home = () => {
  const { data, status, errorMessage } = useFetch<ProductResponseData>(
    'http://3.38.73.117:8080/api/products?page=0&size=10',
  );

  return (
    <>
      <NavigationBar type={'homeLayout'} />
      {status === 'error' && <NotFound errorMessage={errorMessage} />}
      {data && <ProductList itemData={data?.data.products} />}
      <S.ButtonBox>
        <Button
          buttonType="circle"
          buttonState="active"
          size="L"
          iconType="plus"
        />
      </S.ButtonBox>
      <TabBarHome currentPage="home" />
    </>
  );
};

export default Home;
