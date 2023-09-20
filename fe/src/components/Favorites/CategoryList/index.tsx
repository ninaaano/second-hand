import { getFavoritesCategory } from '@Apis/favorites';
import Button from '@Components/common/Button';
import { useState } from 'react';
import useFetch from '@Hooks/useFetch';
import { CategoryResponseData } from '@Types/index';
import * as S from './style';

interface CategoryListProps {
  handleCategory: (categoryId: number) => void;
}

const CategoryList = ({ handleCategory }: CategoryListProps) => {
  const [currentCategoryId, setCurrentCategoryId] = useState(0);
  const { data: categoryData } = useFetch<CategoryResponseData>({
    fetchFn: getFavoritesCategory,
  });

  return (
    <S.CategoryBox>
      <Button
        buttonType="ellipse"
        buttonState={currentCategoryId === 0 ? 'active' : 'default'}
        size="S"
        title="전체"
        onClick={() => {
          setCurrentCategoryId(0);
          handleCategory(0);
        }}
      />
      {categoryData &&
        categoryData.data.category.map(({ categoryId, categoryName }) => (
          <Button
            key={categoryId}
            buttonType="ellipse"
            buttonState={
              currentCategoryId === categoryId ? 'active' : 'default'
            }
            size="S"
            title={categoryName}
            onClick={() => {
              setCurrentCategoryId(categoryId);
              handleCategory(categoryId);
            }}
          />
        ))}
    </S.CategoryBox>
  );
};

export default CategoryList;
