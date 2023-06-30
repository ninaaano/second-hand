import { Fragment, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import useInfiniteScroll from '@Hooks/useInfiniteScroll';
import usePullToRefresh from '@Hooks/usePullToRefresh';

import { Product, ProductResponseData } from '@Types/index';

import { ProductItem } from './ProductItem';
import * as S from './style';
import NotFound from '../NotFound';
import { Spinner } from '../Spinner/style';

interface ProductListProps {
  itemData: Product[];
  targetLocationId?: number;
}

export const ProductList = ({
  itemData,
  targetLocationId,
}: ProductListProps) => {
  const navigate = useNavigate();

  const productListRef = useRef<HTMLDivElement>(null);
  const [Products, setProducts] = useState<Product[]>(itemData);

  const { refreshing, distance, status, errorMessage, refreshedData } =
    usePullToRefresh<ProductResponseData>(
      `${END_POINT.products}?page=0&size=10${
        targetLocationId && `&locationId=${targetLocationId}`
      }`,
    );
  const { scrolledData } = useInfiniteScroll<ProductResponseData>({
    URL: END_POINT.products,
    ...(targetLocationId && { locationId: targetLocationId }),
    target: productListRef,
  });

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
              isWatchList={product.watchlist}
              isCategory={true}
              isCount={true}
              onClick={() =>
                navigate(`/productDetail/${product.productId}`, {
                  state: {
                    counts: product.watchlistCounts,
                  },
                })
              }
            />
            <hr />
          </Fragment>
        ))}
      <S.BottomBox />
    </S.Layout>
  );
};
