import { getAllLocations } from '@Apis/locationApi';
import LocationList from '@Components/common/LocationList';
import { NavigationBar } from '@Components/common/NavBar';
import NotFound from '@Components/common/NotFound';
import { Spinner } from '@Components/common/Spinner';
import { useEffect, useState } from 'react';
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

  const [primaryLocation, setPrimaryLocation] = useState<LocationData>();

  const locations = data?.data.locations;

  const setLocation = (location: LocationData) => {
    setPrimaryLocation(location);
  };

  const goToRegistrationPage = (primaryLocation: LocationData) => {
    navigate(ROUTE_PATH.REGISTRATION, {
      state: { primaryLocation },
    });
  };

  const goToLocationSettingPage = (primaryLocation: LocationData) => {
    navigate(ROUTE_PATH.LOCATION_SETTING, {
      state: { primaryLocation },
    });
  };

  const goToPreviousPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (primaryLocation) {
      if (location.state.from === ROUTE_PATH.REGISTRATION) {
        goToRegistrationPage(primaryLocation);
      }
      if (location.state.from === ROUTE_PATH.LOCATION_SETTING) {
        goToLocationSettingPage(primaryLocation);
      }
    }
  }, [primaryLocation]);

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
