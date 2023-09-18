import { NewProductButton } from '@Components/Home/NewProductButton';
import { NavigationBar } from '@Components/common/NavBar';
import NotFound from '@Components/common/NotFound';
import { ProductList } from '@Components/common/ProductList';
import { Spinner } from '@Components/common/Spinner';
import { TabBarHome } from '@Components/common/TabBar';
import { useHomeProductsContext } from '@Contexts/homeProductContext';
import { useUserLocationContext } from '@Contexts/userTownContext';
import { useEffect } from 'react';
import { API_STATUS } from '@Constants/index';

const Home = () => {
  const { userLocationList, reverseUserLocationList } =
    useUserLocationContext();
  const {
    homeProductList,
    homeProductsApiStatus,
    getHomeProducts,
    errorMessage,
  } = useHomeProductsContext();

  // TODO(덴): 위치 수정 필요
  const userTownList = userLocationList
    .filter((location) => location && location.town)
    .map((location) => location.town);

  useEffect(() => {
    if (userLocationList.length !== 0) {
      getHomeProducts({
        locationId: userLocationList[0].locationId,
      });
    }
  }, [userLocationList]);

  return (
    <>
      <NavigationBar
        type="homeLayout"
        title="title1"
        towns={userTownList}
        modalHanlder={reverseUserLocationList}
      />
      {homeProductsApiStatus === API_STATUS.ERROR && (
        <NotFound errorMessage={errorMessage} />
      )}
      {homeProductsApiStatus === API_STATUS.LOADING && <Spinner isDynamic />}
      {homeProductsApiStatus === API_STATUS.SUCCESS && homeProductList && (
        <ProductList list={homeProductList} />
      )}
      <NewProductButton />
      <TabBarHome currentPage="home" />
    </>
  );
};

export default Home;
