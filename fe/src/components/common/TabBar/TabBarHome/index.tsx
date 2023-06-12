import { Icon } from '@Components/common/Icon';
import { tabBarList } from 'types';

import { TAB_LIST } from '@Constants/index';

import { palette } from '@Styles/color';

import * as S from './style';

interface TabBarHomeProps {
  currentPage: tabBarList;
}

const TabBarHome = ({ currentPage }: TabBarHomeProps) => (
  <S.Box>
    {Object.entries(TAB_LIST).map(([tabId, tabName]) => (
      <S.Item key={tabId}>
        <Icon
          iconType={tabId as tabBarList}
          width={48}
          height={21}
          fill={tabId === currentPage ? palette.black : palette.gray800}
        />
        <S.ItemName isSelected={tabId === currentPage}>{tabName}</S.ItemName>
      </S.Item>
    ))}
  </S.Box>
);

export default TabBarHome;
