import { Icon } from '@Components/common/Icon';
import { useNavigate } from 'react-router-dom';
import { tabBarList } from 'types';

import { TAB_LIST } from '@Constants/index';

import { palette } from '@Styles/color';

import * as S from './style';

interface TabBarHomeProps {
  currentPage: tabBarList;
}

export const TabBarHome = ({ currentPage }: TabBarHomeProps) => {
  const navigate = useNavigate();
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
      const targetPage = tabId === 'home' ? '/home' : `/${tabId}`;
      navigate(targetPage);
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
            fill={tabId === currentPage ? palette.orange : palette.gray800}
          />
          <S.ItemName isSelected={tabId === currentPage}>{tabName}</S.ItemName>
        </S.Item>
      ))}
    </S.Box>
  );
};

export default TabBarHome;
