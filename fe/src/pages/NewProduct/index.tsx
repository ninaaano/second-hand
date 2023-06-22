import { NewImg } from '@Components/NewProduct/NewImg';
import Button from '@Components/common/Button';
import { Icon } from '@Components/common/Icon';
import { NavigationBar } from '@Components/common/NavBar';
import { TabBarSellProduct } from '@Components/common/TabBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import useFetch from '@Hooks/useFetch';

import { debounce } from '@Utils/debounce';

import { Category, CategoryResponseData } from '@Types/index';

import * as S from './style';
export const NewProduct = () => {
  const { data } = useFetch<CategoryResponseData>(END_POINT.category);

  const [randomCategory, setRandomCategory] = useState<Category[]>([]);

  const navigate = useNavigate();

  const handleSaveCatgory = debounce(() => {
    const arr = data?.data.category.sort(() => Math.random() - 0.5);
    if (arr) {
      setRandomCategory(arr?.slice(0, 3));
    }
  }, 2000);

  return (
    <S.Layout>
      <NavigationBar
        type="modalLayout"
        prev="닫기"
        center="내 물건 팔기"
        right="완료"
      />
      <S.ContentBox>
        <div className="empty" />
        <S.SaveImgBox>
          <NewImg />
        </S.SaveImgBox>
        <hr />
        <S.TitleBox>
          <input
            type="text"
            placeholder="글제목"
            onChange={handleSaveCatgory}
          />
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
                onClick={() => navigate('/category')}
              />
            </S.CategoryBox>
          )}
        </S.TitleBox>
        <hr />
        <S.PriceBox>
          <label htmlFor="priceBox">￦</label>
          <input type="number" placeholder="가격(선택 사항)" id="priceBox" />
        </S.PriceBox>
        <hr />
        <S.DetailBox>
          <textarea placeholder="역삼 1동에 올릴 게시물 내용을 작성해주세요.(판매금지 물품은 게시가 제한될 수 있어요.)" />
        </S.DetailBox>
      </S.ContentBox>
      <TabBarSellProduct currentLocation="역삼1동" />
    </S.Layout>
  );
};
