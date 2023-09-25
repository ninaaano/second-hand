import { getSales } from '@Apis/sales';
import { NavBarSegmentPicker } from '@Components/common/NavBar/NavBarSegmentPicker';
import { ProductList } from '@Components/common/ProductList';
import { TabBarHome } from '@Components/common/TabBar';
import { useState } from 'react';
import useFetch from '@Hooks/useFetch';
import { ProductResponseData } from '@Types/index';
import * as S from './style';

const SalesList = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const { data: SalesListData } = useFetch<ProductResponseData>({
    fetchFn: getSales,
  });

  return (
    <S.Layout>
      <NavBarSegmentPicker
        title="판매내역"
        isActiveSetValue={setIsActive}
        isActiveValue={isActive}
      />
      <div className="empty" />
      {SalesListData && <ProductList list={SalesListData.data.products} />}
      <TabBarHome currentPage="sales" />
    </S.Layout>
  );
};

export default SalesList;
