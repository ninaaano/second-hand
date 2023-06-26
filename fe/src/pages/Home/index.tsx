import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import NotFound from '@Components/common/NotFound';
import { ProductList } from '@Components/common/ProductList';
import { TabBarHome } from '@Components/common/TabBar';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import useFetchAll from '@Hooks/useFetchAll';

import {
  ProductResponseData,
  UserContextProps,
  UserLocationResponseData,
} from '@Types/index';

import * as S from './style';
import { UserContext } from '../../App';

const Home = () => {
  const { setUserInfo } = useContext(UserContext) as UserContextProps;
  const navigate = useNavigate();

  const { data, status, errorMessage } = useFetchAll<
    UserLocationResponseData | ProductResponseData
  >([
    `${END_POINT.userLocation}?page=0&size=10`,
    `${END_POINT.products}?page=0&size=10`,
  ]);

  const userLocations = data[0] as UserLocationResponseData;

  const towns = Object.entries(userLocations.data).map(
    ([locationType, locationInfo]) => {
      console.log(locationType);
      return locationInfo.town;
    },
  );

  useEffect(() => {
    setUserInfo({ primaryTown: towns[0] });
  }, [towns]);

  const products = data[1] as ProductResponseData;

  return (
    <>
      <NavigationBar type="homeLayout" title="title1" towns={towns} />
      {status === 'error' && <NotFound errorMessage={errorMessage} />}
      {products && <ProductList itemData={products.data.products} />}
      <S.ButtonBox>
        <Button
          buttonType="circle"
          buttonState="active"
          size="L"
          iconType="plus"
          onClick={() => navigate('/newproudct')}
        />
      </S.ButtonBox>
      <TabBarHome currentPage="home" />
    </>
  );
};

export default Home;
