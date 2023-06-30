import { ProductDetailContent } from '@Components/ProductDetail/ProductDetailContent';
import { ProductDetailImg } from '@Components/ProductDetail/ProductDetailImg';
import Button from '@Components/common/Button';
import { Icon } from '@Components/common/Icon';
import { Modal } from '@Components/common/Modal';
import { TabBarProductDetail } from '@Components/common/TabBar';
import { useEffect, useRef, useState } from 'react';
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import { colors } from '@Styles/color';

import useFetch from '@Hooks/useFetch';

import { ProductDetailResponseData } from '@Types/index';

import * as S from './style';

export const ProductDetail = () => {
  const location = useLocation();

  const { id } = useParams();
  const { data, fetchData } = useFetch<ProductDetailResponseData>(
    `${END_POINT.products}/${id}`,
  );

  const [isActiv, setIsActiv] = useState<boolean>(false);
  const [isActivSaleModal, setIsActiveSaleModal] = useState<boolean>(false);

  const currentWatchList = data?.data.watchlist as boolean;

  const [isWatchList, setIsWatchList] = useState<boolean>(currentWatchList);
  const [watchCount, setWatchCount] = useState<number>(location.state.counts);

  const DimmedRef = useRef<HTMLDivElement>(null);
  const StateRef = useRef<HTMLDivElement>(null);

  const navigation = useNavigate();

  const handleProductDetail = () => {
    setIsActiv(true);
  };

  const handleProductDetailClick = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    event.stopPropagation();
  };

  const changeName = (statuse: string) => {
    switch (statuse) {
      case 'SALE':
        return '판매중';
      case 'RESERVED':
        return '예약중';
      case 'SOLD_OUT':
        return '판매완료';
      default:
        return '파악불가';
    }
  };

  const changeWatchList = async (method: string) => {
    await fetchData({
      url: `${END_POINT.products}/${id}/watchlist`,
      isGetData: false,
      method,
    });
  };

  useEffect(() => {
    if (isWatchList && watchCount === 0) {
      setWatchCount((prevCount) => prevCount + 1);
    } else if (watchCount > 0) {
      setWatchCount((prevCount) =>
        isWatchList ? prevCount + 1 : prevCount - 1,
      );
    }
  }, [isWatchList]);

  useEffect(() => {
    if (data) {
      setIsWatchList(data.data.watchlist);
      setWatchCount(data.data.watchlistCounts);
    }
  }, [data]);

  useEffect(() => {
    const handleClickSaleOutside = ({ target }: MouseEvent) => {
      if (StateRef.current && !StateRef.current.contains(target as Node))
        setIsActiveSaleModal(false);
    };

    const handleClickOutside = ({ target }: MouseEvent) => {
      if (DimmedRef.current && !DimmedRef.current.contains(target as Node))
        setIsActiv(false);
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('click', handleClickSaleOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('click', handleClickSaleOutside);
    };
  }, []);

  return (
    <>
      {(isActiv || isActivSaleModal) && (
        <S.DimmedBox>
          <div className="dimmed" />
        </S.DimmedBox>
      )}
      <S.Layout onClick={handleProductDetailClick}>
        {isActiv && (
          <Modal
            stateRef={DimmedRef}
            titleList={['게시글 수정', '삭제']}
            buttonTitle={'취소'}
          />
        )}
        {isActivSaleModal && (
          <Modal
            stateRef={StateRef}
            titleList={['판매중', '예약중', '판매완료']}
            buttonTitle={'취소'}
          />
        )}
        {data?.data && <ProductDetailImg detailData={data?.data} />}
        <S.NavBarBox>
          <Icon
            iconType="chevronLeft"
            width={23}
            onClick={() => navigation(-1)}
          />
          <Icon
            iconType="ellipsis"
            fill="brack"
            width={23}
            onClick={handleProductDetail}
          />
        </S.NavBarBox>
        <S.DotBox>
          {data?.data.images.map((item, index) => (
            <Icon
              key={item.productImageId}
              iconType="dot"
              width={12}
              fill={
                index === 0 ? colors.neutralTextStrong : colors.neutralTextWeak
              }
            />
          ))}
        </S.DotBox>
        <div className="user-info_box">
          <S.UserInfoBox>
            <span className="user-category">판매자</span>
            <span className="user-id">{data?.data.sellerId}</span>
          </S.UserInfoBox>
        </div>
        <S.BtnBox>
          <Button
            buttonType="rectangle"
            buttonState="default"
            size="S"
            title={data?.data.status && changeName(data?.data.status)}
            textAlign="left"
            iconType="chevronDown"
            onClick={() => setIsActiveSaleModal(true)}
          />
        </S.BtnBox>
        {data?.data && (
          <ProductDetailContent
            detailData={data?.data}
            watchCount={watchCount}
          />
        )}
        {data?.data && (
          <TabBarProductDetail
            price={data?.data.price}
            isWatchList={isWatchList}
            setIsWatchList={setIsWatchList}
            changeWatchList={changeWatchList}
          />
        )}
      </S.Layout>
    </>
  );
};
