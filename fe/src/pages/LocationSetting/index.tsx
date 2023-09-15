import Button from '@Components/common/Button';
import { NavBarModal } from '@Components/common/NavBar/NavBarModal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useLocationSet from '@Hooks/useLocationSet';

import * as S from './style';

const LocationSetting = () => {
  const navigate = useNavigate();
  const { locations, setContextUserLocation } = useLocationSet();
  const [isShowNotice, setIsShowNotice] = useState(false);

  const handleBackBtnClick = () => {
    navigate('/home');
  };

  const handleIconClick = (index: number) => {
    if (locations.length === 1) {
      setIsShowNotice(true);
      return;
    }
    setContextUserLocation(index);
  };

  useEffect(() => {
    if (isShowNotice) setTimeout(() => setIsShowNotice(false), 1000);
  }, [isShowNotice]);

  return (
    <>
      {/* <NavigationBar
        type="modalLayout"
        prev="닫기"
        center="동네 설정"
        prevHandler={handleBackBtnClick}
      /> */}
      <NavBarModal
        prev="닫기"
        center="동네 설정"
        handlePrev={handleBackBtnClick}
      />
      <S.Layout>
        <S.Notice>
          <span>지역은 최소 1개,</span>
          <span>최대 2개까지 설정 가능해요.</span>
        </S.Notice>
        <S.ButtonBox>
          {locations.map(({ locationId, town }, index) => (
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
          {locations.length < 2 && (
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
