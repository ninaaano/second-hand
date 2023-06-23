import Button from '@Components/common/Button';
import { Icon } from '@Components/common/Icon';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import useFetch from '@Hooks/useFetch';

import { debounce } from '@Utils/debounce';

import { CategoryType, CategoryResponseData } from '@Types/index';

import * as S from './style';

export const NewTitle = () => {
  const { data } = useFetch<CategoryResponseData>(END_POINT.category);
  const navigation = useNavigate();
  const [randomCategory, setRandomCategory] = useState<CategoryType[]>([]);
  const [selectCategory, setSelectCategory] = useState<CategoryType>();
  const [title, setTitle] = useState<string>('');

  const handleSaveCatgory = debounce(({ target }) => {
    const value = target.value;
    handleSaveTitle(value);
    const arr = data?.data.category.sort(() => Math.random() - 0.5);
    if (arr) {
      const randomCategory = arr?.slice(0, 3);
      setRandomCategory(randomCategory);
      sessionStorage.setItem('randomCategory', JSON.stringify(randomCategory));
    }
  }, 1000);

  const handleSaveTitle = (titleValue: string) => {
    sessionStorage.setItem('saveTitle', JSON.stringify(titleValue));
  };

  const getTitle = () => {
    const titleData = sessionStorage.getItem('saveTitle');
    if (titleData) {
      setTitle(JSON.parse(titleData));
    }
  };

  const getCategory = () => {
    const categoryData = sessionStorage.getItem('saveCategory');
    if (categoryData) {
      setSelectCategory(JSON.parse(categoryData));
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
          setTitle(target.value);
          handleSaveCatgory({ target });
        }}
        value={title}
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
