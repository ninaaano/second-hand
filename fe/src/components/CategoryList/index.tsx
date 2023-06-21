import NotFound from '@Components/common/NotFound';

import useFetch from '@Hooks/useFetch';

import { CategoryResponseData } from '@Types/index';

import * as S from './style';

export const CategoryList = () => {
  const { data, status, errorMessage } = useFetch<CategoryResponseData>(
    'http://3.38.73.117:8080/api/category',
  );

  return (
    <>
      {status === 'error' && <NotFound errorMessage={errorMessage} />}
      {data &&
        data.data?.category.map((item) => (
          <S.Layout key={item.categoryId}>
            <div>{item.categoryName}</div>
            <hr />
          </S.Layout>
        ))}
    </>
  );
};
