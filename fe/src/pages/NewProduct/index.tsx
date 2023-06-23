import { NewImg } from '@Components/NewProduct/NewImg';
import { NewTitle } from '@Components/NewProduct/NewTitle';
import { NavigationBar } from '@Components/common/NavBar';
import { TabBarSellProduct } from '@Components/common/TabBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';

export const NewProduct = () => {
  const [price, setPrice] = useState<string>('');
  const handelSavePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    sessionStorage.setItem('savePrice', JSON.stringify(value));
  };

  const navigation = useNavigate();

  return (
    <S.Layout>
      <NavigationBar
        type="modalLayout"
        prev="닫기"
        center="내 물건 팔기"
        right="완료"
        prevHandler={() => navigation(-1)}
      />
      <S.ContentBox>
        <div className="empty" />
        <S.SaveImgBox>
          <NewImg />
        </S.SaveImgBox>
        <hr />
        <NewTitle />
        <hr />
        <S.PriceBox>
          <label htmlFor="priceBox">￦</label>
          <input
            type="number"
            placeholder="가격(선택 사항)"
            id="priceBox"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPrice(e.target.value);
              handelSavePrice(e);
            }}
            value={price}
          />
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
