import { Icon } from '@Components/common/Icon';
import NotFound from '@Components/common/NotFound';
import { Fragment, useEffect, useState } from 'react';

import { palette } from '@Styles/color';

import useFetch from '@Hooks/useFetch';

import { CategoryResponseData } from '@Types/index';

import * as S from './style';

export const CategoryList = () => {
  const { data, status, errorMessage } = useFetch<CategoryResponseData>(
    'http://3.38.73.117:8080/api/category',
  );

  const handleCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    const categoryId = (e.target as HTMLDivElement).getAttribute('data-id');
    console.log(categoryId);
    sessionStorage.setItem('saveCategoryId', String(categoryId));
    saveCategory();
  };

  const [categoryIdData, setCategoryIdData] = useState<number>();

  const saveCategory = () => {
    const categoryIdData = sessionStorage.getItem('saveCategoryId');
    setCategoryIdData(Number(categoryIdData));
  };

  useEffect(() => {
    saveCategory();
  }, [categoryIdData]);

  return (
    <S.Layout onClick={handleCategory}>
      {status === 'error' && <NotFound errorMessage={errorMessage} />}
      {data &&
        data.data?.category.map((item) => (
          <Fragment key={item.categoryId}>
            <S.CategoryBox key={item.categoryId} data-id={item.categoryId}>
              <div data-id={item.categoryId}>{item.categoryName}</div>
              {categoryIdData === item.categoryId && (
                <Icon iconType="chevronDown" fill={palette.orange} />
              )}
            </S.CategoryBox>
            <hr />
          </Fragment>
        ))}
    </S.Layout>
  );
};
