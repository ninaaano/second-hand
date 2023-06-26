import { LocationData } from '@Types/index';

import * as S from './style';

interface LocationListProps {
  locations: LocationData[];
  handleItemClick: React.Dispatch<React.SetStateAction<LocationData>>;
}

const LocationList = ({ locations, handleItemClick }: LocationListProps) => (
  <S.Box>
    {locations.map(({ locationId, district, city, town }) => {
      const location = {
        locationId,
        district,
        city,
        town,
      };

      return (
        <S.Item
          key={`${district} ${city} ${town}`}
          onClick={() => {
            handleItemClick(location);
          }}
        >
          {district} {city} {town}
        </S.Item>
      );
    })}
  </S.Box>
);

export default LocationList;
