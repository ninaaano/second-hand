import Button from '@Components/common/Button';
import { Icon } from '@Components/common/Icon';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import useFetch from '@Hooks/useFetch';

import { CategoryType, CategoryResponseData } from '@Types/index';

import * as S from './style';

interface NewTitleProps {
  titleProps: React.Dispatch<React.SetStateAction<string>>;
  titleValueProps: string;
}

export const NewTitle = ({ titleProps, titleValueProps }: NewTitleProps) => {
  const { data } = useFetch<CategoryResponseData>(END_POINT.category);
  const navigation = useNavigate();
  const [randomCategory, setRandomCategory] = useState<CategoryType[]>([]);
  const [selectCategory, setSelectCategory] = useState<CategoryType>();

  const handleRandomCategory = () => {
    if (randomCategory.length <= 0) {
      const arr = data?.data.category.sort(() => Math.random() - 0.5);

      if (arr) {
        const randomCategory = arr?.slice(0, 3);
        setRandomCategory(randomCategory);
      }
    }
  };

  const getTitle = () => {
    const titleData = sessionStorage.getItem('saveTitle');
    if (titleData) {
      titleProps(JSON.parse(titleData));
    }
  };

  const getCategory = () => {
    const pickCategoryData = sessionStorage.getItem('saveCategory');
    if (pickCategoryData) {
      setSelectCategory(() => {
        const pickData = JSON.parse(pickCategoryData);
        return pickData;
      });
    }
  };

  const getCategoryList = () => {
    console.log('se', selectCategory);
    if (selectCategory) {
      const isPickInRandom = randomCategory.some(
        (category) => category.categoryId === selectCategory.categoryId,
      );
      if (!isPickInRandom) {
        console.log('pickRandom', isPickInRandom);
        setRandomCategory((prevData) => [selectCategory, ...prevData]);
      }
    }
  };

  const getRandomCategory = () => {
    const categoryData = sessionStorage.getItem('randomCategory');
    if (categoryData) setRandomCategory(JSON.parse(categoryData));
  };

  const handleSaveDetail = () => {
    if (titleValueProps.length) {
      sessionStorage.setItem('saveTitle', JSON.stringify(titleValueProps));
    }
    if (randomCategory.length) {
      sessionStorage.setItem('randomCategory', JSON.stringify(randomCategory));
    }

    if (selectCategory !== undefined) {
      sessionStorage.setItem('saveCategory', JSON.stringify(selectCategory));
    }
  };

  useEffect(() => {
    getRandomCategory();
    getCategoryList();
    if (selectCategory !== undefined) {
      sessionStorage.setItem('saveCategory', JSON.stringify(selectCategory));
    }
  }, [selectCategory]);

  useEffect(() => {
    getTitle();
    getCategory();
  }, []);

  return (
    <S.Layout>
      <input
        type="text"
        placeholder="글제목"
        onChange={(e) => {
          titleProps(e.target.value);
          handleRandomCategory();
        }}
        maxLength={50}
        value={titleValueProps}
      />
      {randomCategory.length > 0 && (
        <S.CategoryBox>
          <S.CategoryBtnBox>
            {randomCategory.map((category) => (
              <Button
                key={category.categoryId}
                buttonType="ellipse"
                buttonState={
                  selectCategory?.categoryId === category.categoryId
                    ? 'active'
                    : 'default'
                }
                size="S"
                title={category.categoryName}
                onClick={() =>
                  setSelectCategory({
                    categoryId: category.categoryId,
                    categoryName: category.categoryName,
                  })
                }
              />
            ))}
          </S.CategoryBtnBox>
          <Icon
            iconType="chevronRight"
            onClick={() => {
              handleSaveDetail();
              navigation('/category');
            }}
          />
        </S.CategoryBox>
      )}
    </S.Layout>
  );
};
