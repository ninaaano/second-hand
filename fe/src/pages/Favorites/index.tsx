import { getCurrentCategoryProducts } from '@Apis/favorites';
import CategoryList from '@Components/Favorites/CategoryList';
import { NavigationBar } from '@Components/common/NavBar';
import { ProductList } from '@Components/common/ProductList';
import { TabBarHome } from '@Components/common/TabBar';
import useFetch from '@Hooks/useFetch';
import { ProductResponseData } from '@Types/index';

import * as S from './style';

const Favorites = () => {
  const { data: productListData, fetch } = useFetch<ProductResponseData>(
    getCurrentCategoryProducts,
  );

  const getProductsBy = (categoryId: number) => {
    fetch({ callback: () => getCurrentCategoryProducts(categoryId) });
  };

  return (
    <>
      <NavigationBar type="defaultLayout" title="관심 목록" />
      <CategoryList handleCategory={getProductsBy} />
      <S.TopBox />
      {productListData && <ProductList list={productListData.data.products} />}
      <S.BottomBox />
      <TabBarHome currentPage="heart" />
    </>
  );
};

export default Favorites;
