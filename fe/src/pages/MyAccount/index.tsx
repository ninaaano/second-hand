import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import { TabBarHome } from '@Components/common/TabBar';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContextProps } from '@Types/index';

import * as S from './style';
import { UserContext } from '../../App';

const MyAccount = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext as React.Context<UserContextProps>);

  const logoutHandler = () => {
    localStorage.removeItem('JWTToken');
    navigate('/');
  };

  return (
    <>
      <NavigationBar type="defaultLayout" title="내 계정" />
      <S.InfoBox>
        <S.ImgBox>
          <S.UserImg src={user?.avatar} />
        </S.ImgBox>
        <S.NoticeBox>
          <S.UserId>{user?.username} 🥕</S.UserId>
        </S.NoticeBox>
        <S.AddLocationButtonBox>
          <Button
            buttonType="rectangle"
            buttonState="active"
            size="L"
            title="로그아웃"
            onClick={logoutHandler}
          />
        </S.AddLocationButtonBox>
      </S.InfoBox>
      ;
      <TabBarHome currentPage="account" />
    </>
  );
};

export default MyAccount;
