import TabBarChat from './TabBarChat';
import TabBarHome from './TabBarHome';
import TabBarProductDetail from './TabBarProductDetail';
import TabBarSellProduct from './TabBarSellProduct';
import * as S from './style';

interface TabBarProps {
  page: 'main' | 'sellProduct' | 'productDetail' | 'chat';
}

const TabBar = ({ page = 'main' }: TabBarProps) => (
  <S.Box>
    {page === 'main' && <TabBarHome currentPage="home" />}
    {page === 'sellProduct' && <TabBarSellProduct currentLocation="역삼1동" />}
    {page === 'productDetail' && <TabBarProductDetail price="10000원" />}
    {page === 'chat' && <TabBarChat />}
  </S.Box>
);

export default TabBar;
