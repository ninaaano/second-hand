import useFetch from '@Hooks/useFetch';

import { Product } from '@Types/index';

import { ProductItem } from './ProductItem';
import * as S from './style';

interface ListProps {
  statusCode: number;
  message: string;
  data: {
    products: Product[];
  };
}
export const ProductList = () => {
  const { data } = useFetch<ListProps>('http://3.38.73.117:8080/api/products');
  console.log(data);

  return (
    <S.Layout>
      {data &&
        data.data.products.map((product) => (
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
    </S.Layout>
  );
};
