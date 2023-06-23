import { Spinner } from '@Components/common/Spinner';
import jwt_decode from 'jwt-decode';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import useFetch from '@Hooks/useFetch';

import { User, UserContextProps } from '@Types/index';

import { USER_ALREADY_REGISTERED, USER_SIGN_UP_IN_PROGRESS } from './constant';
import * as S from './style';
import { UserContext } from '../../App';

interface AuthData {
  code: string;
  message: string;
  data: string;
}

const Auth = () => {
  const { setUserInfo } = useContext(
    UserContext as React.Context<UserContextProps>,
  );
  const navigate = useNavigate();
  const { data, status, fetchData } = useFetch<AuthData>();

  const url = new URL(window.location.href);
  const queryCode = url.searchParams.get('code');

  useEffect(() => {
    const getToken = async () => {
      await fetchData({
        url: `${END_POINT.login}?code=${queryCode}&clientType=fe`,
        isGetData: true,
      });
    };
    getToken();
  }, []);

  useEffect(() => {
    if (data) {
      const JWTToken = data.data;
      const payload = jwt_decode<User>(JWTToken);

      const userInfo = {
        userId: payload.userId,
        username: payload.username,
        avatar: payload.avatar,
      };

      setUserInfo(userInfo);

      if (!localStorage.getItem('JWTToken')) {
        localStorage.setItem('JWTToken', JWTToken);
      }

      if (data.message === USER_SIGN_UP_IN_PROGRESS) {
        navigate('/registration', {
          state: {
            username: payload.username,
            avatar: payload.avatar,
          },
        });
      }

      if (data.message === USER_ALREADY_REGISTERED) {
        // TODO(덴): 유저 동네 api 나오면, Get 요청 보내서 context에 set하기.
        navigate('/home');
      }
    }
  }, [data]);

  return <S.Box>{status === 'loading' && <Spinner isDynamic={false} />}</S.Box>;
};

export default Auth;
