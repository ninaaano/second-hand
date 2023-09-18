import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { Product } from '@Types/index';

import { ProductItem } from './ProductItem';
import * as S from './style';
interface ProductListProps {
  list: Product[];
}

export const ProductList = ({ list }: ProductListProps) => {
  const navigate = useNavigate();

  return (
    <S.Layout>
      <S.TopBox />
      {list &&
        list.map((item) => (
          <Fragment key={item.productId}>
            <ProductItem
              imageUrl={item.mainImage.imageUrl}
              title={item.title}
              city={item.location.city}
              town={item.location.town}
              createdAt={item.createdAt}
              price={item.price}
              watchlistCounts={item.watchlistCounts}
              chatroomCounts={item.chatroomCounts}
              status={item.status}
              isWatchList={item.watchlist}
              isCategory={true}
              isCount={true}
              onClick={() =>
                navigate(`/productDetail/${item.productId}`, {
                  state: {
                    counts: item.watchlistCounts,
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
