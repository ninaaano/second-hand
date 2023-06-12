import { Icon } from '@Components/common/Icon';

import * as S from './style';

interface TabBarProductDetailProps {
  productPrice: string;
}

const TabBarProductDetail = ({ productPrice }: TabBarProductDetailProps) => (
  <S.Box>
    <S.Item>
      <Icon
        iconType={'heart'}
        width={18}
        height={19}
        fill={'neutralTextStrong'}
      />
      {productPrice}
    </S.Item>
    <S.Item>
      <Icon iconType={'keyboard'} fill={'neutralTextStrong'} />
    </S.Item>
  </S.Box>
);

export default TabBarProductDetail;
