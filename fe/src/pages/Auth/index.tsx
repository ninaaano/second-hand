import { Spinner } from '@Components/common/Spinner';
import { useAuthContext } from '@Contexts/authContext';
import { useUserContext } from '@Contexts/userContext';
import { useUserLocationContext } from '@Contexts/userTownContext';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_STATUS } from '@Constants/index';
import { ROUTE_PATH } from '@Constants/route';
import { User } from '@Types/index';
import { USER_ALREADY_REGISTERED, USER_SIGN_UP_IN_PROGRESS } from './constant';
import * as S from './style';

const Auth = () => {
  const navigate = useNavigate();
  const { authInfo, authApiStatus, login } = useAuthContext();
  const { setUserInfo } = useUserContext();
  const { status: locationApiStatus, fetchUserLocation } =
    useUserLocationContext();

  useEffect(() => {
    login();
  }, []);

  useEffect(() => {
    if (authInfo && authApiStatus === API_STATUS.SUCCESS) {
      const JWTToken = authInfo.data;
      const { userId, username, avatar } = jwt_decode<User>(JWTToken);

      setUserInfo({ userId, username, avatar });

      if (authInfo.message === USER_SIGN_UP_IN_PROGRESS) {
        navigate(ROUTE_PATH.REGISTRATION);
      }

      if (authInfo.message === USER_ALREADY_REGISTERED) {
        fetchUserLocation();
        navigate(ROUTE_PATH.HOME);
      }
    }
  }, [authInfo, authApiStatus]);

  return (
    <S.Box>
      {[authApiStatus, locationApiStatus].includes(API_STATUS.LOADING) && (
        <Spinner isDynamic={false} />
      )}
    </S.Box>
  );
};

export default Auth;
