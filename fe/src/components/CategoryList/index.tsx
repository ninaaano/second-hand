import { Icon } from '@Components/common/Icon';
import NotFound from '@Components/common/NotFound';
import { Fragment, useEffect, useState } from 'react';

import { END_POINT } from '@Constants/endpoint';

import { palette } from '@Styles/color';

import useFetch from '@Hooks/useFetch';

import { CategoryResponseData, CategoryType } from '@Types/index';

import * as S from './style';

export const CategoryList = () => {
  const { data, status, errorMessage } = useFetch<CategoryResponseData>(
    END_POINT.category,
  );

  const handleCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    const categoryId = (e.target as HTMLDivElement).getAttribute('data-id');
    const categoryName = (e.target as HTMLDivElement).getAttribute('data-name');
    sessionStorage.setItem(
      'saveCategory',
      JSON.stringify({
        categoryId: Number(categoryId),
        categoryName: categoryName,
      }),
    );
    saveCategory();
  };

  const [categoryIdData, setCategoryIdData] = useState<CategoryType>();

  const saveCategory = () => {
    const categoryData = sessionStorage.getItem('saveCategory');
    if (categoryData !== null) {
      setCategoryIdData(JSON.parse(categoryData));
    }
  };

  useEffect(() => {
    saveCategory();
  }, []);

  return (
    <S.Layout onClick={handleCategory}>
      {status === 'error' && <NotFound errorMessage={errorMessage} />}
      {data &&
        data.data?.category.map((item) => (
          <Fragment key={item.categoryId}>
            <S.CategoryBox
              key={item.categoryId}
              data-id={item.categoryId}
              data-name={item.categoryName}
            >
              <div data-id={item.categoryId} data-name={item.categoryName}>
                {item.categoryName}
              </div>
              {categoryIdData &&
                categoryIdData.categoryId === item.categoryId && (
                  <Icon iconType="chevronDown" fill={palette.orange} />
                )}
            </S.CategoryBox>
            <hr />
          </Fragment>
        ))}
    </S.Layout>
  );
};
