import { NavigationBar } from '@Components/common/NavBar';
import { NavBarSegmentPicker } from '@Components/common/NavBar/NavBarSegmentPicker';
import { ProductList } from '@Components/common/ProductList';
import { TabBarHome } from '@Components/common/TabBar';
import { useEffect, useState } from 'react';

import { END_POINT } from '@Constants/endpoint';

import useFetch from '@Hooks/useFetch';

import { Product, ProductResponseData } from '@Types/index';

import * as S from './style';
const SalesList = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const { data, fetchData } = useFetch<ProductResponseData>(
    `${END_POINT.sale}?page=0`,
  );
  console.log(data);

  const getSoldOutProduct = async () => {
    fetchData({
      url: `${END_POINT.sale}?page=0&saleStatus=SOLD_OUT`,
      isGetData: true,
    });
  };
  //TODO: 판매완료일때는 다시 데이터를 업그레이드를 해줘야하는데 문제가 발생한다
  // useEffect(() => {
  //   getSoldOutProduct();
  // }, [isActive]);

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
