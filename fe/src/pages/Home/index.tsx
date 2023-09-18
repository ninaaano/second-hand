import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import NotFound from '@Components/common/NotFound';
import { ProductList } from '@Components/common/ProductList';
import { Spinner } from '@Components/common/Spinner';
import { TabBarHome } from '@Components/common/TabBar';
import { useHomeProductsContext } from '@Contexts/homeProductContext';
import { useUserLocationContext } from '@Contexts/userTownContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_STATUS } from '@Constants/index';
import { ROUTE_PATH } from '@Constants/route';
import { useFilter } from '@Hooks/useFilter';
import * as S from './style';

const Home = () => {
  const navigate = useNavigate();

  const { userLocationList } = useUserLocationContext();
  const {
    homeProductList,
    homeProductsApiStatus,
    getHomeProducts,
    errorMessage,
  } = useHomeProductsContext();

  const { currentIndex, handleFilter } = useFilter();

  // TODO(덴): 위치 수정 필요
  const userTownList = userLocationList
    .filter((location) => location && location.town)
    .map((location) => location.town);

  useEffect(() => {
    if (userLocationList.length !== 0) {
      getHomeProducts({
        locationId: userLocationList[currentIndex].locationId,
      });
    }
  }, [userLocationList, currentIndex]);

  return (
    <>
      <NavigationBar
        type="homeLayout"
        title="title1"
        towns={
          currentIndex === 0
            ? (userTownList as unknown as string[])
            : (userTownList.reverse() as unknown as string[])
        }
        modalHanlder={handleFilter}
      />
      {homeProductsApiStatus === API_STATUS.ERROR && (
        <NotFound errorMessage={errorMessage} />
      )}
      {homeProductsApiStatus === API_STATUS.LOADING && <Spinner isDynamic />}
      {homeProductsApiStatus === API_STATUS.SUCCESS && homeProductList && (
        <ProductList list={homeProductList} />
      )}
      <S.ButtonBox>
        <Button
          buttonType="circle"
          buttonState="active"
          size="L"
          iconType="plus"
          onClick={() => navigate(ROUTE_PATH.NEW_PRODUCT)}
        />
      </S.ButtonBox>
      <TabBarHome currentPage="home" />
    </>
  );
};

export default Home;
