import { NavigationBar } from '@Components/common/NavBar';
import { ProductList } from '@Components/common/ProductList';
import TabBar from '@Components/common/TabBar';
import { useEffect, useState } from 'react';

import { Scroll } from '@Hooks/Scroll';
import useFetch from '@Hooks/useFetch';

import { Product } from '@Types/index';

interface ListProps {
  statusCode: number;
  message: string;
  data: {
    products: Product[];
  };
}

export const Home = () => {
  const { data } = useFetch<ListProps>(
    'http://3.38.73.117:8080/api/products?page=0&size=10',
  );

  return (
    <>
      <NavigationBar type={'homeLayout'} />
      {data && <ProductList itemData={data?.data.products} />}
      <TabBar page={'main'} />
    </>
  );
};
