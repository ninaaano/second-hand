import { NavigationBar } from '@Components/common/NavBar';
import NotFound from '@Components/common/NotFound';
import { ProductList } from '@Components/common/ProductList';
import TabBar from '@Components/common/TabBar';

import useFetch from '@Hooks/useFetch';

import { ProductResponseData } from '@Types/index';

export const Home = () => {
  const { data, status, errorMessage } = useFetch<ProductResponseData>(
    'http://3.38.73.117:8080/api/products?page=0&size=20',
  );

  return (
    <>
      <NavigationBar type={'homeLayout'} />
      {status === 'error' && <NotFound errorMessage={errorMessage} />}
      {data && <ProductList itemData={data?.data.products} />}
      <TabBar page={'main'} />
    </>
  );
};
