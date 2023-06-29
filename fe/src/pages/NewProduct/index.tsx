import { NewImg } from '@Components/NewProduct/NewImg';
import { NewTitle } from '@Components/NewProduct/NewTitle';
import { NavigationBar } from '@Components/common/NavBar';
import { TabBarSellProduct } from '@Components/common/TabBar';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import useFetch from '@Hooks/useFetch';

import { SaleResponseData, UserContextProps } from '@Types/index';

import * as S from './style';
import { UserContext } from '../../App';

export const NewProduct = () => {
  const { user } = useContext(UserContext) as UserContextProps;
  const [price, setPrice] = useState<string>('0');
  const [title, setTitle] = useState<string>('');
  const [contentes, setContents] = useState<string>('');
  const [productImages, setProductImages] = useState<File[]>([]);
  const [categoryId, setCategoryId] = useState<number>(0);
  const formData = new FormData();

  console.log('user', user);

  const { fetchData } = useFetch<SaleResponseData>();

  const handelSavePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    sessionStorage.setItem('savePrice', JSON.stringify(value));
  };

  const handelDetailText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    sessionStorage.setItem('saveDetailText', JSON.stringify(value));
  };
  const handlePost = async () => {
    formData.append('title', title);
    formData.append('price', Number(price).toString());
    formData.append('contents', contentes);
    productImages?.forEach((product) =>
      formData.append('productImages', product),
    );
    formData.append('categoryId', categoryId.toString());
    formData.append('locationId', user.towns[0].locationId.toString());

    await fetchData({
      url: END_POINT.products,
      isGetData: true,
      method: 'POST',
      body: formData,
    });
  };

  const getPriceData = () => {
    const priceData = sessionStorage.getItem('savePrice');
    if (priceData) {
      setPrice(JSON.parse(priceData));
    }
  };

  const getDetailTextData = () => {
    const detailText = sessionStorage.getItem('saveDetailText');
    if (detailText) {
      setContents(JSON.parse(detailText));
    }
  };

  const getTitleData = () => {
    const saveCategoryData = sessionStorage.getItem('saveTitle');
    if (saveCategoryData) {
      setTitle(JSON.parse(saveCategoryData));
    }
  };

  const getCategoryId = () => {
    const saveCategoryData = sessionStorage.getItem('saveCategory');
    if (saveCategoryData) {
      setCategoryId(JSON.parse(saveCategoryData).categoryId);
    }
  };

  const navigation = useNavigate();

  useEffect(() => {
    getPriceData();
    getDetailTextData();
    getTitleData();
    getCategoryId();
  });

  return (
    <S.Layout>
      <NavigationBar
        type="modalLayout"
        prev="닫기"
        center="내 물건 팔기"
        right="완료"
        prevHandler={() => navigation(-1)}
        rightHandler={() => {
          handlePost();
          navigation('/home');
        }}
      />
      <S.ContentBox>
        <div className="empty" />
        <S.SaveImgBox>
          <NewImg
            originFile={setProductImages}
            originFileValue={productImages}
          />
        </S.SaveImgBox>
        <hr />
        <NewTitle titleProps={setTitle} titleValueProps={title} />
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
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setContents(e.target.value);
              handelDetailText(e);
            }}
          />
        </S.DetailBox>
      </S.ContentBox>
      <TabBarSellProduct currentLocation="역삼1동" />
    </S.Layout>
  );
};
