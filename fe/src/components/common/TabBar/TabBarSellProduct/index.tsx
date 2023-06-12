import { Icon } from '@Components/common/Icon';

import * as S from './style';

interface TabBarSellProductProps {
  currentLocation: string;
}

const TabBarSellProduct = ({ currentLocation }: TabBarSellProductProps) => (
  <S.Box>
    <S.Item>
      <Icon
        iconType={'slider'}
        width={18}
        height={19}
        fill={'neutralTextStrong'}
      />
      {currentLocation}
    </S.Item>
    <S.Item>
      <Icon iconType={'keyboard'} fill={'neutralTextStrong'} />
    </S.Item>
  </S.Box>
);

export default TabBarSellProduct;
