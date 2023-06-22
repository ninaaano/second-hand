import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

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
    await fetchData({
      url: END_POINT.signUp,
      isGetData: true,
      method: 'POST',
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
          <S.Notice>🥕</S.Notice>
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
