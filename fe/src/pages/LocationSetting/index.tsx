import LocationButtonList from '@Components/LocationSetting/LocationButtonList';
import LocationNotice from '@Components/LocationSetting/LocationNotice';
import MessageAlert from '@Components/LocationSetting/MessageAlert';
import { NavigationBar } from '@Components/common/NavBar';
import { useUserLocationContext } from '@Contexts/userLocationContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LEAST_LOCATION } from '@Constants/location';
import { ROUTE_PATH } from '@Constants/route';
import * as S from './style';

const LocationSetting = () => {
  const navigate = useNavigate();
  const { userTownList, deleteUserLocation } = useUserLocationContext();
  const [isShowNotice, setIsShowNotice] = useState(false);

  const handleBackBtnClick = () => {
    navigate(ROUTE_PATH.HOME);
  };

  const updateUserLocation = (index: number) => {
    if (userTownList.length === LEAST_LOCATION) {
      setIsShowNotice(true);
      return;
    }
    deleteUserLocation(index);
  };

  useEffect(() => {
    if (isShowNotice) setTimeout(() => setIsShowNotice(false), 1000);
  }, [isShowNotice]);

  return (
    <>
      <NavigationBar
        type="modalLayout"
        prev="닫기"
        center="동네 설정"
        prevHandler={handleBackBtnClick}
      />
      <S.Layout>
        <LocationNotice />
        <LocationButtonList handleIcon={updateUserLocation} />
        {isShowNotice && <MessageAlert />}
      </S.Layout>
    </>
  );
};

export default LocationSetting;
