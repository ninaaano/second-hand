import LocationSelectField from '@Components/Registration/LocationSelectField';
import { NavigationBar } from '@Components/common/NavBar';
import UserProfile from '@Components/common/UserProfile';
import { useAuthContext } from '@Contexts/authContext';
import { useUserInfoContext } from '@Contexts/userInfoContext';
import { useUserLocationContext } from '@Contexts/userLocationContext';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { USER_SIGN_UP_IN_PROGRESS } from '@Constants/auth';
import { API_STATUS } from '@Constants/index';
import { ROUTE_PATH } from '@Constants/route';

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const primaryLocation = location.state
    ? location.state.primaryLocation
    : undefined;
  const { userInfo } = useUserInfoContext();
  const { userLocationApiStatus, getUserLocation } = useUserLocationContext();
  const { authInfo, authApiStatus, signUp } = useAuthContext();

  const goToLocationSearch = () => {
    navigate(ROUTE_PATH.LOCATION_SEARCH, {
      state: {
        from: ROUTE_PATH.REGISTRATION,
      },
    });
  };

  const handleCloseBtnClick = () => {
    navigate(ROUTE_PATH.ROOT);
  };

  const handleSubmitBtnClick = async () => {
    if (!primaryLocation) return;
    signUp(primaryLocation.locationId);
  };

  useEffect(() => {
    if (primaryLocation && authInfo?.message !== USER_SIGN_UP_IN_PROGRESS) {
      getUserLocation();
    }
  }, [primaryLocation, authApiStatus, authInfo]);

  useEffect(() => {
    if (userLocationApiStatus === API_STATUS.SUCCESS) {
      navigate(ROUTE_PATH.HOME);
    }
  }, [userLocationApiStatus]);

  return (
    <>
      <NavigationBar
        type="modalLayout"
        prev="닫기"
        center="회원가입"
        right="완료"
        prevHandler={handleCloseBtnClick}
        rightHandler={handleSubmitBtnClick}
        isRightActive={primaryLocation !== undefined}
      />
      <UserProfile avatar={userInfo.avatar} username={userInfo.username}>
        <LocationSelectField
          handleBtnClick={goToLocationSearch}
          primaryLocation={primaryLocation}
        />
      </UserProfile>
    </>
  );
};

export default Registration;
