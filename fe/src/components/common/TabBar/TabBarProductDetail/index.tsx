import Button from '@Components/common/Button';
import { Icon } from '@Components/common/Icon';

import { palette } from '@Styles/color';

import * as S from './style';

interface TabBarProductDetailProps {
  price: number;
}

const TabBarProductDetail = ({ price }: TabBarProductDetailProps) => (
  <S.Box>
    <S.Item>
      <Icon iconType={'heart'} width={25} height={25} fill={palette.black} />
      {price}
    </S.Item>
    <Button
      buttonType="rectangle"
      buttonState="active"
      title="대화 중인 채팅방"
    />
  </S.Box>
);

export default TabBarProductDetail;
