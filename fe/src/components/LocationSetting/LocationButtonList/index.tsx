import Button from '@Components/common/Button';
import { useUserLocationContext } from '@Contexts/userLocationContext';
import { useNavigate } from 'react-router-dom';
import { MAXIMUM_LOCATION } from '@Constants/location';
import { ROUTE_PATH } from '@Constants/route';
import * as S from './style';

interface LocationButtonListProps {
  handleIcon: (index: number) => void;
}

const LocationButtonList = ({ handleIcon }: LocationButtonListProps) => {
  const navigate = useNavigate();
  const { userLocationList } = useUserLocationContext();

  const userTownList = userLocationList
    .filter((location) => location && location.town)
    .map((location) => location.town);

  return (
    <S.ButtonBox>
      {userTownList.map((town, index) => (
        <Button
          key={town}
          buttonType="rectangle"
          buttonState="active"
          size="M"
          title={town}
          iconType="multiply"
          textAlign="left"
          iconHandler={() => handleIcon(index)}
        />
      ))}
      {userTownList.length < MAXIMUM_LOCATION && (
        <Button
          buttonType="rectangle"
          buttonState="default"
          size="M"
          iconType="plus"
          onClick={() =>
            navigate(ROUTE_PATH.LOCATION_SEARCH, {
              state: {
                from: ROUTE_PATH.LOCATION_SETTING,
              },
            })
          }
        />
      )}
    </S.ButtonBox>
  );
};

export default LocationButtonList;
