import { getAllLocations } from '@Apis/location';
import LocationList from '@Components/common/LocationList';
import { NavBarModalSearch } from '@Components/common/NavBar/NavBarModalSearch';
import { useUserLocationContext } from '@Contexts/userLocationContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@Constants/route';
import useFetch from '@Hooks/useFetch';
import { LocationData } from '@Types/index';

interface LocationResponseData {
  statusCode: string;
  message: string;
  data: {
    locations: LocationData[];
  };
}

const LocationSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { data: LocationListData } = useFetch<LocationResponseData>({
    fetchFn: getAllLocations,
  });
  const { addUserLocation } = useUserLocationContext();

  const locations = LocationListData?.data.locations;

  const setLocation = (locationData: LocationData) => {
    if (location.state.from === ROUTE_PATH.REGISTRATION) {
      navigate(ROUTE_PATH.REGISTRATION, {
        state: { locationData },
      });
    }
    if (location.state.from === ROUTE_PATH.LOCATION_SETTING) {
      addUserLocation(locationData);
      navigate(ROUTE_PATH.LOCATION_SETTING);
    }
  };

  const goToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <>
      <NavBarModalSearch prevHandler={goToPreviousPage} />
      {locations && (
        <LocationList locations={locations} handleItemClick={setLocation} />
      )}
    </>
  );
};

export default LocationSearch;
