import { NewImg } from '@Components/NewProduct/NewImg';
import { NewTitle } from '@Components/NewProduct/NewTitle';
import { NavigationBar } from '@Components/common/NavBar';
import { TabBarSellProduct } from '@Components/common/TabBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import useFetch from '@Hooks/useFetch';

import { SaleResponseData } from '@Types/index';

import * as S from './style';

export const NewProduct = () => {
  const [price, setPrice] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [contentes, setContents] = useState<string>('');
  const [productImages, setProductImages] = useState<string[]>([]);
  const [categoryId, setCategoryId] = useState<number>(0);

  const { data, fetchData } = useFetch<SaleResponseData>();

  const handelSavePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    sessionStorage.setItem('savePrice', JSON.stringify(value));
  };
  const handlePost = async () => {
    await fetchData({
      url: END_POINT.products,
      isGetData: true,
      method: 'POST',
      body: JSON.stringify({
        title: title,
        price: price,
        contentes: contentes,
        productImages: productImages,
        categoryId: categoryId,
        locationId: 1,
      }),
    });
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
        rightHandler={handlePost}
      />
      <S.ContentBox>
        <div className="empty" />
        <S.SaveImgBox>
          <NewImg productList={setProductImages} />
        </S.SaveImgBox>
        <hr />
        <NewTitle titleProps={setTitle} categoryProps={setCategoryId} />
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
          <textarea
            placeholder="역삼 1동에 올릴 게시물 내용을 작성해주세요.(판매금지 물품은 게시가 제한될 수 있어요.)"
            value={contentes}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setContents(e.target.value)
            }
          />
        </S.DetailBox>
      </S.ContentBox>
      <TabBarSellProduct currentLocation="역삼1동" />
    </S.Layout>
  );
};
