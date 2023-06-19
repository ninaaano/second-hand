import * as S from './style';

interface NotFoundProps {
  errorMessage: string | null;
}

const NotFound = ({ errorMessage }: NotFoundProps) => (
  <S.Layout>
    <S.Image src="https://user-images.githubusercontent.com/81420856/246175709-96210fb1-1836-477d-bc20-8e0df383eb9d.png" />
    <S.MainNoticeMessage>페이지를 찾을 수 없습니다.</S.MainNoticeMessage>
    <S.SubNoticeMessage>{errorMessage}</S.SubNoticeMessage>
  </S.Layout>
);

export default NotFound;
