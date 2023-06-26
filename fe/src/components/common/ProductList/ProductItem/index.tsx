import { Icon } from '@Components/common/Icon';
import { useState } from 'react';

import { palette } from '@Styles/color';

import { DecimalPoint } from '@Utils/DecimalPoint';
import { getElapsedTime } from '@Utils/TimeCounter';

import * as S from './style';
import { StatusLabel } from '../StatusLabel';

interface ProductItemProps {
  imageUrl: string;
  title: string;
  city: string;
  town: string;
  createdAt: string;
  price: number;
  watchlistCounts: number;
  chatroomCounts: number;
  status: string;
  isCategory: boolean;
  isCount: boolean;
}

export const ProductItem = ({
  imageUrl,
  title,
  city,
  town,
  createdAt,
  price,
  watchlistCounts,
  chatroomCounts,
  status,
  isCategory,
  isCount,
}: ProductItemProps) => {
  const [heart, setHeart] = useState(false);

  const handleFill = () => {
    if (heart) {
      setHeart(false);
    } else {
      setHeart(true);
    }
  };

  return (
    <S.Layout>
      <S.ImgBox>
        <img src={imageUrl} />
      </S.ImgBox>
      <S.ContentBox>
        <S.TitleBox>
          <span>{title}</span>
          {isCategory && <Icon iconType={'ellipsis'} fill={palette.gray800} />}
        </S.TitleBox>
        <S.LocationBox>
          <span>
            {city} {town} · {getElapsedTime(createdAt)}
          </span>
        </S.LocationBox>
        <S.PriceBox>
          {status === 'RESERVED' && <StatusLabel />}
          {DecimalPoint(price)}원
        </S.PriceBox>
        <S.IconBox>
          {isCount && (
            <>
              <Icon iconType="chat" fill={palette.gray900} width={12} />
              <span>{watchlistCounts}</span>
              {heart ? (
                <Icon
                  iconType="innerHeart"
                  fill={palette.gray900}
                  width={12}
                  onClick={handleFill}
                />
              ) : (
                <Icon
                  iconType="heart"
                  fill={palette.gray900}
                  width={12}
                  onClick={handleFill}
                />
              )}
              <span>{chatroomCounts}</span>
            </>
          )}
        </S.IconBox>
      </S.ContentBox>
    </S.Layout>
  );
};
