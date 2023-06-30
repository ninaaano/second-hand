import Button from '@Components/common/Button';
import { Icon } from '@Components/common/Icon';
import React, { Dispatch } from 'react';

import { palette } from '@Styles/color';

import * as S from './style';

interface TabBarProductDetailProps {
  price: number;
  isWatchList: boolean | undefined;
  setIsWatchList: Dispatch<React.SetStateAction<boolean>>;
  changeWatchList: (method: string) => void;
}

const TabBarProductDetail = ({
  price,
  isWatchList,
  setIsWatchList,
  changeWatchList,
}: TabBarProductDetailProps) => (
  <S.Box>
    <S.Item>
      {isWatchList ? (
        <Icon
          iconType={'innerHeart'}
          width={25}
          height={25}
          fill={palette.black}
          onClick={() => {
            setIsWatchList(false);
            changeWatchList('DELETE');
          }}
        />
      ) : (
        <Icon
          iconType={'heart'}
          width={25}
          height={25}
          fill={palette.black}
          onClick={() => {
            setIsWatchList(true);
            changeWatchList('POST');
          }}
        />
      )}
      {price}
    </S.Item>
    <Button
      buttonType="rectangle"
      size="S"
      buttonState="active"
      title="대화 중인 채팅방"
    />
  </S.Box>
);

export default TabBarProductDetail;
