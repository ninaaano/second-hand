import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './style';

const LocationSetting = () => {
  const navigate = useNavigate();
  // TODO(덴): 유저 동네 GET, POST api 나오면 붙이기.
  // TODO(덴): 유저 동네 GET 요청.
  // const { user } = useContext(UserContext as React.Context<UserContextProps>);
  // const primaryLocation = user?.primaryLocation.town;
  const [locations, setLocations] = useState(['강남동']);
  const location = useLocation();

  const handlerGoBackButtonClick = () => {
    navigate('/home');
  };

  useEffect(() => {
    if (location.state) {
      const { locationData } = location.state;
      setLocations((prevLocation) => [...prevLocation, locationData.town]);
    }
  }, [location]);

  const handleIconClick = (index: number) => {
    setLocations((prevLocation) => {
      const updatedLocations = [...prevLocation];
      updatedLocations.splice(index, 1);
      return updatedLocations;
    });
  };

  return (
    <>
      <NavigationBar
        type="modalLayout"
        prev="닫기"
        center="동네 설정"
        prevHandler={handlerGoBackButtonClick}
      />
      <S.Layout>
        <S.Notice>
          <span>지역은 최소 1개,</span>
          <span>최대 2개까지 설정 가능해요.</span>
        </S.Notice>
        <S.ButtonBox>
          {locations.map((location, index) => (
            <Button
              key={index}
              buttonType="rectangle"
              buttonState="active"
              size="M"
              title={location}
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
      </S.Layout>
    </>
  );
};

export default LocationSetting;
