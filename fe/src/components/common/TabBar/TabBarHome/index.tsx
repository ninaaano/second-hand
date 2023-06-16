import { Icon } from '@Components/common/Icon';
import { tabBarList } from 'types';

import { TAB_LIST } from '@Constants/index';

import { palette } from '@Styles/color';

import * as S from './style';

interface TabBarHomeProps {
  currentPage: tabBarList;
}

const TabBarHome = ({ currentPage }: TabBarHomeProps) => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleTabItemClick = (tabId: tabBarList) => {
    if (tabId === currentPage) {
      scrollToTop();
    } else {
      // TODO: navigate 적용
    }
  };

  return (
    <S.Box>
      {Object.entries(TAB_LIST).map(([tabId, tabName]) => (
        <S.Item
          key={tabId}
          onClick={() => handleTabItemClick(tabId as tabBarList)}
        >
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
};

export default TabBarHome;
