import Button from '@Components/common/Button';
import { Icon } from '@Components/common/Icon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useFetch from '@Hooks/useFetch';

import { debounce } from '@Utils/debounce';

import { CategoryType, CategoryResponseData } from '@Types/index';
interface NewTitleProps {
  isCategory: (value: boolean) => void;
}

import * as S from './style';

export const NewTitle = () => {
  const { data } = useFetch<CategoryResponseData>(
    'http://3.38.73.117:8080/api/category',
  );
  const navigation = useNavigate();
  const [randomCategory, setRandomCategory] = useState<CategoryType[]>([]);

  const handleSaveCatgory = debounce(() => {
    const arr = data?.data.category.sort(() => Math.random() - 0.5);
    if (arr) {
      setRandomCategory(arr?.slice(0, 3));
    }
  }, 1000);

  return (
    <S.Layout>
      <input type="text" placeholder="글제목" onChange={handleSaveCatgory} />
      {randomCategory.length > 0 && (
        <S.CategoryBox>
          <S.CategoryBtnBox>
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
