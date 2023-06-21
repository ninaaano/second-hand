import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';

import useFetch from '@Hooks/useFetch';

import * as S from './style';

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { fetchData } = useFetch();

  const { username, avatar, primaryLocation } = location.state;

  const handleLocationBtnClick = () => {
    navigate('/locationSetting', {
      state: {
        ...location.state,
      },
    });
  };

  const handleCloseBtnClick = () => {
    navigate('/');
  };

  const handleSubmitBtnClick = async () => {
    if (!primaryLocation) return;

    const JWTToken = localStorage.getItem('JWTToken');

    await fetchData({
      url: `http://3.38.73.117:8080/signup`,
      isGetData: true,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${JWTToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...primaryLocation,
      }),
    });
  };

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
      <S.InfoBox>
        <S.ImgBox>
          <S.UserImg src={avatar} />
        </S.ImgBox>
        <S.NoticeBox>
          <S.UserId>{username}</S.UserId>
          <S.Notice>님</S.Notice>
        </S.NoticeBox>
        <S.AddLocationButtonBox>
          <Button
            buttonType="rectangle"
            buttonState="active"
            size="L"
            iconType="plus"
            title="위치 추가"
            onClick={handleLocationBtnClick}
          />
        </S.AddLocationButtonBox>
      </S.InfoBox>
    </>
  );
};

export default Registration;
