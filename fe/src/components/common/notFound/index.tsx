import * as S from './style';

interface NotFoundProps {
  errorMessage: string;
}

const NotFound = ({ errorMessage }: NotFoundProps) => (
  <S.Layout>
    <S.MainNoticeMessage>페이지를 찾을 수 없습니다.</S.MainNoticeMessage>
    <S.SubNoticeMessage>{errorMessage}</S.SubNoticeMessage>
  </S.Layout>
);

export default NotFound;
