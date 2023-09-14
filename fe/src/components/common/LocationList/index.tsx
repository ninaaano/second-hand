import { LocationData } from '@Types/index';

import * as S from './style';

interface LocationListProps {
  locations: LocationData[];
  handleItemClick: (location: LocationData) => void;
}

const LocationList = ({ locations, handleItemClick }: LocationListProps) => (
  <S.Box>
    {locations.map(({ locationId, district, city, town }) => (
      <S.Item
        key={`${district} ${city} ${town}`}
        onClick={() => handleItemClick({ locationId, district, city, town })}
      >
        {district} {city} {town}
      </S.Item>
    ))}
  </S.Box>
);

export default LocationList;
