import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import { useNavigate } from 'react-router-dom';

import * as S from './style';

const LocationSetting = () => {
  const navigate = useNavigate();
  // TODO(덴): 유저 동네 GET, POST api 나오면 붙이기
  const Towns = ['역삼 1동'];

  return (
    <>
      <NavigationBar
        type="modalLayout"
        prev="닫기"
        center="동네 설정"
        prevHandler={() =>
          navigate('/home', {
            state: {
              from: '/localSetting',
            },
          })
        }
      />
      <S.Layout>
        <S.Notice>
          <span>지역은 최소 1개,</span>
          <span>최대 2개까지 설정 가능해요.</span>
        </S.Notice>
        <S.ButtonBox>
          <Button
            buttonType="rectangle"
            buttonState="active"
            size="M"
            title={Towns[0]}
            iconType="multiply"
            textAlign="left"
          />
          {Towns[1] ? (
            <Button
              buttonType="rectangle"
              buttonState="active"
              size="M"
              title={Towns[1]}
              iconType="multiply"
              textAlign="left"
            />
          ) : (
            <Button
              buttonType="rectangle"
              buttonState="default"
              size="M"
              iconType="plus"
              onClick={() => navigate('/locationSearch')}
            />
          )}
        </S.ButtonBox>
      </S.Layout>
    </>
  );
};

export default LocationSetting;
