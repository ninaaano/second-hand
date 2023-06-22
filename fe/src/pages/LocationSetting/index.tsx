import LocationList from '@Components/common/LocationList';
import { NavigationBar } from '@Components/common/NavBar';
import NotFound from '@Components/common/NotFound';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useFetch from '@Hooks/useFetch';

import { LocationData } from '@Types/index';

interface LocationResponseData {
  statusCode: string;
  message: string;
  data: {
    locations: LocationData[];
  };
}

const initialLocationState = {
  locationId: 0,
  district: '',
  city: '',
  town: '',
};

const LocationSetting = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { data, status, errorMessage } = useFetch<LocationResponseData>(
    'http://3.38.73.117:8080/api/locations',
  );
  const [locationData, setLocation] =
    useState<LocationData>(initialLocationState);

  const locations = data?.data.locations;

  const goToRegistrationPage = (locationData: LocationData) => {
    navigate('/registration', {
      state: {
        ...location.state,
        primaryLocation: locationData,
      },
    });
  };

  const goToPreviousPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (locationData.district && locationData.city && locationData.town) {
      goToRegistrationPage(locationData);
    }
  }, [locationData]);

  return (
    <>
      <NavigationBar type="modalSearchLayout" prevHandler={goToPreviousPage} />
      {status === 'error' && <NotFound errorMessage={errorMessage} />}
      {status !== 'error' && locations && (
        <LocationList locations={locations} handleItemClick={setLocation} />
      )}
    </>
  );
};

export default LocationSetting;