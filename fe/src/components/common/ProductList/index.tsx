import { Fragment, useEffect, useState } from 'react';

import usePullToRefresh from '@Hooks/useFullToRefresh';

import { Product, ProductResponseData } from '@Types/index';

import { ProductItem } from './ProductItem';
import * as S from './style';
import NotFound from '../NotFound';
import { Spinner } from '../Spinner/style';

interface ProductListProps {
  itemData: Product[];
}

export const ProductList = ({ itemData }: ProductListProps) => {
  const [Products, setProducts] = useState<Product[] | undefined | null>(
    itemData,
  );
  const { refreshing, distance, status, errorMessage, refreshedData } =
    usePullToRefresh<ProductResponseData>(
      'http://3.38.73.117:8080/api/products?page=0&size=20',
    );

  useEffect(() => {
    if (refreshedData !== undefined) {
      setProducts(refreshedData?.data.products);
    }
  }, [refreshedData]);

  return (
    <S.Layout>
      <S.TopBox />
      {refreshing && (
        <S.SpinnerBox distanceY={distance}>
          <Spinner />
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
