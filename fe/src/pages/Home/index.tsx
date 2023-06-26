import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import NotFound from '@Components/common/NotFound';
import { ProductList } from '@Components/common/ProductList';
import { TabBarHome } from '@Components/common/TabBar';
import { useContext, useEffect, useState } from 'react';
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
  const { user, setUserInfo } = useContext(UserContext) as UserContextProps;
  const navigate = useNavigate();

  const [userLocations, setUserLocations] =
    useState<UserLocationResponseData | null>(null);
  const [products, setProducts] = useState<ProductResponseData | null>(null);

  const towns = user.towns.map(({ town }) => town);

  const { data, status, errorMessage } = useFetchAll<
    UserLocationResponseData | ProductResponseData
  >([
    `${END_POINT.userLocation}?page=0&size=10`,
    `${END_POINT.products}?page=0&size=10`,
  ]);

  useEffect(() => {
    if (data) {
      const userLocationsData = data[0] as UserLocationResponseData;
      const productsData = data[1] as ProductResponseData;

      setUserLocations(userLocationsData);
      setProducts(productsData);
    }
  }, [data]);

  useEffect(() => {
    if (userLocations) {
      const towns = Object.entries(userLocations.data).map(
        ([, locationInfo]) => locationInfo,
      );
      setUserInfo({ towns: towns });
    }
  }, [userLocations, setUserInfo]);

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
