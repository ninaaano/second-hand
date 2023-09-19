import Button from '@Components/common/Button';
import { useUserInfoContext } from '@Contexts/userInfoContext';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@Constants/route';
import * as S from './style';

const UserInfo = () => {
  const navigate = useNavigate();
  const { userInfo } = useUserInfoContext();

  const logoutHandler = () => {
    localStorage.removeItem('JWTToken');
    navigate(ROUTE_PATH.ROOT);
  };

  return (
    <S.InfoBox>
      <S.ImgBox>
        <S.UserImg src={userInfo.avatar} />
      </S.ImgBox>
      <S.NoticeBox>
        <S.UserId>{userInfo.username} 🥕</S.UserId>
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
  );
};

export default UserInfo;
