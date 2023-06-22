import NotFound from '@Components/common/NotFound';

import { END_POINT } from '@Constants/endpoint';

import useFetch from '@Hooks/useFetch';

import { CategoryResponseData } from '@Types/index';

import * as S from './style';

export const CategoryList = () => {
  const { data, status, errorMessage } = useFetch<CategoryResponseData>(
    END_POINT.category,
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
