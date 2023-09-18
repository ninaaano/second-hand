import { getAllLocations } from '@Apis/locationApi';
import LocationList from '@Components/common/LocationList';
import { NavigationBar } from '@Components/common/NavBar';
import NotFound from '@Components/common/NotFound';
import { Spinner } from '@Components/common/Spinner';
import { useUserLocationContext } from '@Contexts/userLocationContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_STATUS } from '@Constants/index';
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

  const {
    data,
    status: locationApiStatus,
    errorMessage,
  } = useFetch<LocationResponseData>(getAllLocations);
  const { addUserLocation } = useUserLocationContext();

  const locations = data?.data.locations;

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
      {locationApiStatus === API_STATUS.ERROR && (
        <NotFound errorMessage={errorMessage} />
      )}
      {locationApiStatus === API_STATUS.LOADING && (
        <Spinner isDynamic={false} />
      )}
      {locationApiStatus === API_STATUS.SUCCESS && locations && (
        <LocationList locations={locations} handleItemClick={setLocation} />
      )}
    </>
  );
};

export default LocationSearch;
