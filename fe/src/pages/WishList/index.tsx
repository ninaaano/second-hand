import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import { ProductItem } from '@Components/common/ProductList/ProductItem';
import { TabBarHome } from '@Components/common/TabBar';
import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import useFetch from '@Hooks/useFetch';
import useFetchAll from '@Hooks/useFetchAll';

import {
  CategoryResponseData,
  CategoryType,
  Product,
  ProductResponseData,
} from '@Types/index';

import * as S from './style';

const WishList = () => {
  const navigate = useNavigate();
  const [currentCategoryId, setCurrentCategoryId] = useState(0);
  const [allCategory, setAllCategory] = useState<CategoryType[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const { data, fetchData } = useFetch<ProductResponseData>();
  const { datas } = useFetchAll<CategoryResponseData | ProductResponseData>([
    END_POINT.watchlistCategory,
    END_POINT.watchlist,
  ]);

  const getCurrentCategoryProducts = async (categoryId: number) => {
    const targetUrl = categoryId
      ? `${END_POINT.watchlist}?page=0&categoryId=${categoryId}`
      : `${END_POINT.watchlist}`;

    await fetchData({
      url: targetUrl,
      isGetData: true,
    });
  };

  useEffect(() => {
    getCurrentCategoryProducts(currentCategoryId);
  }, [currentCategoryId]);

  useEffect(() => {
    if (data) {
      setAllProducts([...data.data.products]);
    }
  }, [data]);

  useEffect(() => {
    if (datas.length) {
      const cateogries = datas[0] as CategoryResponseData;
      const products = datas[1] as ProductResponseData;

      const allCategories = cateogries.data.category;
      const allProducts = products.data.products;
      setAllCategory([...allCategories]);
      setAllProducts([...allProducts]);
    }
  }, [datas]);

  return (
    <>
      <NavigationBar type="defaultLayout" title="관심 목록" />
      <S.CategoryBox>
        <Button
          buttonType="ellipse"
          buttonState={currentCategoryId === 0 ? 'active' : 'default'}
          size="S"
          title="전체"
          onClick={() => {
            setCurrentCategoryId(0);
          }}
        />
        {allCategory &&
          allCategory.map(({ categoryId, categoryName }) => (
            <Button
              key={categoryId}
              buttonType="ellipse"
              buttonState={
                currentCategoryId === categoryId ? 'active' : 'default'
              }
              size="S"
              title={categoryName}
              onClick={() => {
                setCurrentCategoryId(categoryId);
              }}
            />
          ))}
      </S.CategoryBox>
      <S.TopBox />
      {allProducts &&
        allProducts.map(
          ({
            productId,
            mainImage,
            title,
            location,
            createdAt,
            price,
            watchlistCounts,
            chatroomCounts,
            status,
            watchlist,
          }) => (
            <Fragment key={productId}>
              <ProductItem
                imageUrl={mainImage.imageUrl}
                title={title}
                city={location.city}
                town={location.town}
                createdAt={createdAt}
                price={price}
                watchlistCounts={watchlistCounts}
                chatroomCounts={chatroomCounts}
                status={status}
                isWatchList={watchlist}
                isCategory={true}
                isCount={true}
                onClick={() =>
                  navigate(`/productDetail/${productId}`, {
                    state: {
                      counts: watchlistCounts,
                    },
                  })
                }
              />
              <hr />
            </Fragment>
          ),
        )}
      <S.BottomBox />
      <TabBarHome currentPage="heart" />
    </>
  );
};

export default WishList;
