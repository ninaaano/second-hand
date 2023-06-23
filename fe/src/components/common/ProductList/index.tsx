import { Fragment, useEffect, useRef, useState } from 'react';

import { END_POINT } from '@Constants/endpoint';

import usePullToRefresh from '@Hooks/useFullToRefresh';
import useInfiniteScroll from '@Hooks/useInfiniteScroll';

import { Product, ProductResponseData } from '@Types/index';

import { ProductItem } from './ProductItem';
import * as S from './style';
import NotFound from '../NotFound';
import { Spinner } from '../Spinner/style';

interface ProductListProps {
  itemData: Product[];
}

export const ProductList = ({ itemData }: ProductListProps) => {
  const productListRef = useRef<HTMLDivElement>(null);
  const [Products, setProducts] = useState<Product[]>(itemData);

  const { refreshing, distance, status, errorMessage, refreshedData } =
    usePullToRefresh<ProductResponseData>(
      `${END_POINT.products}?page=0&size=10`,
    );
  const { scrolledData } = useInfiniteScroll<ProductResponseData>(
    END_POINT.products,
    productListRef,
  );

  useEffect(() => {
    if (refreshedData) {
      setProducts(refreshedData?.data.products);
    }
  }, [refreshedData]);

  useEffect(() => {
    if (scrolledData) {
      setProducts((prevProducts) => [
        ...prevProducts,
        ...scrolledData.data.products,
      ]);
    }
  }, [scrolledData]);

  return (
    <S.Layout ref={productListRef}>
      <S.TopBox />
      {refreshing && (
        <S.SpinnerBox distanceY={distance}>
          <Spinner isDynamic={true} />
        </S.SpinnerBox>
      )}
      {status === 'error' && <NotFound errorMessage={errorMessage} />}
      {status !== 'error' &&
        Products &&
        Products.map((product) => (
          <Fragment key={product.productId}>
            <ProductItem
              imageUrl={product.mainImage.imageUrl}
              title={product.title}
              city={product.location.city}
              town={product.location.town}
              createdAt={product.createdAt}
              price={product.price}
              watchlistCounts={product.watchlistCounts}
              chatroomCounts={product.chatroomCounts}
              status={product.status}
              isCategory={true}
              isCount={true}
            />
            <hr />
          </Fragment>
        ))}
      <S.BottomBox />
    </S.Layout>
  );
};
