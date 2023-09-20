import Button from '@Components/common/Button';
import { LocationData } from '@Types/index';
import * as S from './style';

interface LocationSelectFieldProps {
  handleBtnClick: () => void;
  primaryLocation: LocationData;
}

const LocationSelectField = ({
  handleBtnClick,
  primaryLocation,
}: LocationSelectFieldProps) => (
  <>
    <S.AddLocationButtonBox>
      <Button
        buttonType="rectangle"
        buttonState="active"
        size="L"
        iconType="plus"
        title="위치 추가"
        onClick={handleBtnClick}
      />
    </S.AddLocationButtonBox>
    <S.LocationBox>
      {primaryLocation ? primaryLocation.town : '위치를 선택해주세요'}
    </S.LocationBox>
  </>
);

export default LocationSelectField;
