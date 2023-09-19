import { LEAST_LOCATION } from '@Constants/location';
import * as S from './style';

const MessageAlert = () => (
  <S.AlertNotice>
    동네는 최소 {LEAST_LOCATION}개 이상 선택해야해요.
  </S.AlertNotice>
);

export default MessageAlert;
