import LocationList from '@Components/common/LocationList';
import { NavigationBar } from '@Components/common/NavBar';
import NotFound from '@Components/common/NotFound';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

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

const LocationSearch = () => {
  // TODO(덴): 동네 검색 api 나오면 붙이기.
  // TODO(덴): api 붙이면서 리팩토링 하기.
  const navigate = useNavigate();
  const location = useLocation();

  const { data, status, errorMessage } = useFetch<LocationResponseData>(
    `${END_POINT.locations}`,
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

  const goToLocationSettingPage = (locationData: LocationData) => {
    navigate('/locationSetting', {
      state: {
        locationData,
      },
    });
  };

  const goToPreviousPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (locationData.district && locationData.city && locationData.town) {
      if (location.state.from === '/registration') {
        goToRegistrationPage(locationData);
      }
      if (location.state.from === '/locationSetting') {
        goToLocationSettingPage(locationData);
      }
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

export default LocationSearch;
