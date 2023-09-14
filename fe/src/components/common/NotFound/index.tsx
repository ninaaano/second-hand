import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ERROR_MESSAGE } from '@Constants/index';

import { ROUTE_PATH } from '@Constants/route';
import * as S from './style';

interface NotFoundProps {
  errorMessage: string | null;
}

const NotFound = ({ errorMessage }: NotFoundProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (errorMessage === ERROR_MESSAGE.timeOut)
      setTimeout(() => navigate(ROUTE_PATH.ROOT));
  }, [errorMessage]);

  return (
    <S.Layout>
      <S.Image src="https://user-images.githubusercontent.com/81420856/246175709-96210fb1-1836-477d-bc20-8e0df383eb9d.png" />
      <S.MainNoticeMessage>페이지를 찾을 수 없습니다.</S.MainNoticeMessage>
      <S.SubNoticeMessage>{errorMessage}</S.SubNoticeMessage>
      {errorMessage === ERROR_MESSAGE.timeOut && (
        <S.SubNoticeMessage>
          잠시후 로그인 화면으로 이동됩니다.
        </S.SubNoticeMessage>
      )}
    </S.Layout>
  );
};

export default NotFound;
