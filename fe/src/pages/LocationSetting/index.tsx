import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import { useUserLocationContext } from '@Contexts/userLocationContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LEAST_LOCATION, MAXIMUM_LOCATION } from '@Constants/location';
import { ROUTE_PATH } from '@Constants/route';
import * as S from './style';

const LocationSetting = () => {
  const navigate = useNavigate();
  const { userLocationList, deleteUserLocation } = useUserLocationContext();
  const [isShowNotice, setIsShowNotice] = useState(false);

  const userTownList = userLocationList
    .filter((location) => location && location.town)
    .map((location) => location.town);

  const handleBackBtnClick = () => {
    navigate(ROUTE_PATH.HOME);
  };

  const handleIconClick = (index: number) => {
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
        <S.Notice>
          <span>지역은 최소 {LEAST_LOCATION}개,</span>
          <span>최대 {MAXIMUM_LOCATION}개까지 설정 가능해요.</span>
        </S.Notice>
        <S.ButtonBox>
          {userTownList.map((town, index) => (
            <Button
              key={town}
              buttonType="rectangle"
              buttonState="active"
              size="M"
              title={town}
              iconType="multiply"
              textAlign="left"
              iconHandler={() => handleIconClick(index)}
            />
          ))}
          {userTownList.length < MAXIMUM_LOCATION && (
            <Button
              buttonType="rectangle"
              buttonState="default"
              size="M"
              iconType="plus"
              onClick={() =>
                navigate(ROUTE_PATH.LOCATION_SEARCH, {
                  state: {
                    from: ROUTE_PATH.LOCATION_SETTING,
                  },
                })
              }
            />
          )}
        </S.ButtonBox>
        {isShowNotice && (
          <S.AlertNotice>
            동네는 최소 {LEAST_LOCATION}개 이상 선택해야해요.
          </S.AlertNotice>
        )}
      </S.Layout>
    </>
  );
};

export default LocationSetting;
