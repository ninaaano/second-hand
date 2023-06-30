import { NavBarSegmentPicker } from '@Components/common/NavBar/NavBarSegmentPicker';
import { ProductList } from '@Components/common/ProductList';
import { TabBarHome } from '@Components/common/TabBar';
import { useState } from 'react';

import { END_POINT } from '@Constants/endpoint';

import useFetch from '@Hooks/useFetch';

import { ProductResponseData } from '@Types/index';

import * as S from './style';
const SalesList = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const { data } = useFetch<ProductResponseData>(`${END_POINT.sale}?page=0`);

  return (
    <S.Layout>
      <NavBarSegmentPicker
        title={'판매내역'}
        isActiveSetValue={setIsActive}
        isActiveValue={isActive}
      />
      <div className="empty" />
      {data && <ProductList itemData={data?.data.products} />}
      <TabBarHome currentPage="sales" />
    </S.Layout>
  );
};

export default SalesList;
