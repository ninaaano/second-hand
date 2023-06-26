import Button from '@Components/common/Button';
import { Icon } from '@Components/common/Icon';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import useFetch from '@Hooks/useFetch';

import { debounce } from '@Utils/debounce';

import { CategoryType, CategoryResponseData } from '@Types/index';

import * as S from './style';

export const NewTitle = ({
  titleProps,
  categoryProps,
}: {
  titleProps: React.Dispatch<React.SetStateAction<string>>;
  categoryProps: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { data } = useFetch<CategoryResponseData>(END_POINT.category);
  const navigation = useNavigate();
  const [randomCategory, setRandomCategory] = useState<CategoryType[]>([]);
  const [selectCategory, setSelectCategory] = useState<CategoryType>();

  const handleSaveCatgory = debounce(({ target }) => {
    const value = target.value;
    sessionStorage.setItem('saveTitle', JSON.stringify(value));
    const arr = data?.data.category.sort(() => Math.random() - 0.5);

    if (arr) {
      const randomCategory = arr?.slice(0, 3);
      setRandomCategory(randomCategory);
      sessionStorage.setItem('randomCategory', JSON.stringify(randomCategory));
    }
  }, 1000);

  const getTitle = () => {
    const titleData = sessionStorage.getItem('saveTitle');
    if (titleData) {
      titleProps(JSON.parse(titleData));
    }
  };

  const getCategory = () => {
    const categoryData = sessionStorage.getItem('saveCategory');
    if (categoryData) {
      setSelectCategory(JSON.parse(categoryData));
      categoryProps(JSON.parse(categoryData).categoryId);
    }
  };

  const getRandomCategory = () => {
    const categoryData = sessionStorage.getItem('randomCategory');
    if (categoryData) setRandomCategory(JSON.parse(categoryData));
  };

  useEffect(() => {
    getTitle();
    getCategory();
    getRandomCategory();
  }, []);

  return (
    <S.Layout>
      <input
        type="text"
        placeholder="글제목"
        onChange={({ target }) => {
          titleProps(target.value);
          handleSaveCatgory({ target });
        }}
        maxLength={50}
      />
      {randomCategory.length > 0 && (
        <S.CategoryBox>
          <S.CategoryBtnBox>
            {selectCategory && (
              <Button
                buttonType="ellipse"
                buttonState="active"
                size="S"
                title={selectCategory.categoryName}
              />
            )}
            {randomCategory.map((category) => (
              <Button
                key={category.categoryId}
                buttonType="ellipse"
                buttonState="default"
                size="S"
                title={category.categoryName}
              />
            ))}
          </S.CategoryBtnBox>
          <Icon
            iconType="chevronRight"
            onClick={() => navigation('/category')}
          />
        </S.CategoryBox>
      )}
    </S.Layout>
  );
};
