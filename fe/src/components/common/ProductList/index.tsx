import { Fragment, useEffect, useRef, useState } from 'react';

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
  const productListRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [Products, setProducts] = useState<Product[] | undefined | null>(
    itemData,
  );

  const { refreshing, distance, status, errorMessage, refreshedData } =
    usePullToRefresh<ProductResponseData | undefined | null>(
      'http://3.38.73.117:8080/api/products?page=0&size=20',
    );

  useEffect(() => {
    if (refreshedData) {
      setProducts(refreshedData?.data.products);
    }
  }, [refreshedData]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (productListRef.current) {
        const { bottom } = productListRef.current.getBoundingClientRect();
        if (bottom / 2 <= window.innerHeight && !isLoading) {
          loadMoreData();
        }
      }
    }, 200);
    if (!isLoading) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  const debounce = <T extends unknown[]>(
    func: (...args: T) => void,
    delay: number,
  ) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: T) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const loadMoreData = async () => {
    setIsLoading(true);

    await fetch(`http://3.38.73.117:8080/api/products?page=${page}&size=10`)
      .then((response) => response.json())
      .then((productsData: ProductResponseData | undefined) => {
        if (productsData !== undefined) {
          const newData = productsData.data?.products;

          setProducts((prevData) => {
            if (prevData) {
              const updatedData = [...prevData, ...(newData || [])];
              return updatedData;
            }
            return prevData;
          });
          setPage((prevData) => prevData + 1);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <S.Layout ref={productListRef}>
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
