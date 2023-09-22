import { getAllLocations } from '@Apis/location';
import LocationList from '@Components/common/LocationList';
import { NavigationBar } from '@Components/common/NavBar';
import { useUserLocationContext } from '@Contexts/userLocationContext';
import { LocalError } from '@Error/LocalError';
import { useLocation, useNavigate } from 'react-router-dom';
import { ERROR_MESSAGE } from '@Constants/index';
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
      <NavigationBar type="modalSearchLayout" prevHandler={goToPreviousPage} />
      {locations && (
        <LocationList locations={locations} handleItemClick={setLocation} />
      )}
    </>
  );
};

export default LocationSearch;
