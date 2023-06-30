import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import useFetch from '@Hooks/useFetch';

import { UserContextProps, UserLocationResponseData } from '@Types/index';

import { UserContext } from '../../App';

const useLocationSet = () => {
  const location = useLocation();
  const { user, setUserInfo } = useContext(
    UserContext as React.Context<UserContextProps>,
  );
  const { fetchData } = useFetch<UserLocationResponseData>();

  const locations = user.towns;

  const updateUserLocation = async () => {
    const [primaryLocation, secondaryLocation] = user.towns;

    const locationDataToUpdate = {
      primaryLocationId: primaryLocation.locationId,
      ...(secondaryLocation && {
        secondaryLocationId: secondaryLocation.locationId,
      }),
    };

    await fetchData({
      url: END_POINT.userLocation,
      isGetData: true,
      method: 'PUT',
      body: JSON.stringify({
        ...locationDataToUpdate,
      }),
    });
  };

  const setContextUserLocation = (index: number) => {
    const updatedLocations = [...user.towns];
    updatedLocations.splice(index, 1);
    setUserInfo({ towns: updatedLocations });
  };

  useEffect(() => {
    if (location.state) {
      const { locationData } = location.state;
      const townExists = user.towns.some(
        ({ district, city, town }) =>
          district === locationData.district &&
          city === locationData.city &&
          town === locationData.town,
      );
      if (!townExists) {
        setUserInfo({ towns: [...user.towns, locationData] });
      }
    }
  }, [location]);

  useEffect(() => {
    updateUserLocation();
  }, [user]);

  return { locations, setContextUserLocation };
};

export default useLocationSet;
