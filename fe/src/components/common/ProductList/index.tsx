import { Product } from '@Types/index';

import { ProductItem } from './ProductItem';
import * as S from './style';

interface ProductListProps {
  itemData: Product[];
}

export const ProductList = ({ itemData }: ProductListProps) => (
  <S.Layout>
    <S.TopBox />
    {itemData &&
      itemData.map((product) => (
        <>
          <ProductItem
            key={product.productId}
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
        </>
      ))}
    <S.BottomBox />
  </S.Layout>
);
