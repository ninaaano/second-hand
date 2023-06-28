import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import useFetch from '@Hooks/useFetch';

import { UserContextProps, UserLocationResponseData } from '@Types/index';

import * as S from './style';
import { UserContext } from '../../App';

const LocationSetting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUserInfo } = useContext(
    UserContext as React.Context<UserContextProps>,
  );
  const [isShowNotice, setIsShowNotice] = useState(false);
  const { fetchData } = useFetch<UserLocationResponseData>();

  const handlerGoBackBtnClick = () => {
    navigate('/home');
  };

  const updateUserLocation = async () => {
    const [primaryLocation, secondaryLocation] = user.towns;

    const locationDataToUpdate = {
      primaryLocationId: primaryLocation.locationId,
      ...(secondaryLocation && {
        secondaryLocationId: secondaryLocation.locationId,
      }),
    };

    await fetchData({
      url: END_POINT.userLocation,
      isGetData: true,
      method: 'PUT',
      body: JSON.stringify({
        ...locationDataToUpdate,
      }),
    });
  };

  const handleIconClick = (index: number) => {
    if (user.towns.length === 1) {
      setIsShowNotice(true);
      return;
    }

    const updatedLocations = [...user.towns];
    updatedLocations.splice(index, 1);
    setUserInfo({ towns: updatedLocations });
  };

  useEffect(() => {
    if (location.state) {
      const { locationData } = location.state;
      setUserInfo({ towns: [...user.towns, locationData] });
    }
  }, [location]);

  useEffect(() => {
    if (isShowNotice) setTimeout(() => setIsShowNotice(false), 1000);
  }, [isShowNotice]);

  useEffect(() => {
    updateUserLocation();
  }, [user]);

  return (
    <>
      <NavigationBar
        type="modalLayout"
        prev="닫기"
        center="동네 설정"
        right="완료"
        prevHandler={handlerGoBackBtnClick}
        isRightActive={user.towns.length >= 1}
      />
      <S.Layout>
        <S.Notice>
          <span>지역은 최소 1개,</span>
          <span>최대 2개까지 설정 가능해요.</span>
        </S.Notice>
        <S.ButtonBox>
          {user.towns.map(({ locationId, town }, index) => (
            <Button
              key={locationId}
              buttonType="rectangle"
              buttonState="active"
              size="M"
              title={town}
              iconType="multiply"
              textAlign="left"
              iconHandler={() => handleIconClick(index)}
            />
          ))}
          {user.towns.length < 2 && (
            <Button
              buttonType="rectangle"
              buttonState="default"
              size="M"
              iconType="plus"
              onClick={() =>
                navigate('/locationSearch', {
                  state: {
                    from: '/locationSetting',
                  },
                })
              }
            />
          )}
        </S.ButtonBox>
        {isShowNotice && (
          <S.AlertNotice>동네는 최소 1개 이상 선택해야해요.</S.AlertNotice>
        )}
      </S.Layout>
    </>
  );
};

export default LocationSetting;
