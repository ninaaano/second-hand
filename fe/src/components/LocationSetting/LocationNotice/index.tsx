import { LEAST_LOCATION, MAXIMUM_LOCATION } from '@Constants/location';
import * as S from './style';

const LocationNotice = () => (
  <S.Notice>
    <span>지역은 최소 {LEAST_LOCATION}개,</span>
    <span>최대 {MAXIMUM_LOCATION}개까지 설정 가능해요.</span>
  </S.Notice>
);

export default LocationNotice;
