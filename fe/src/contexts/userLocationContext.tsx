import { getUserLocations, updateUserLocations } from '@Apis/locationApi';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import useFetch from '@Hooks/useFetch';
import { getLocationIds } from '@Utils/getLocationIds';
import {
  LocationData,
  UserLocationResponseData,
  apiStutus,
} from '@Types/index';

interface UserLocationContextProps {
  userLocationList: LocationData[];
  userTownList: string[];
  userLocationApiStatus: apiStutus;
  getUserLocation: () => void;
  addUserLocation: (locationData: LocationData) => void;
  deleteUserLocation: (index: number) => void;
  reverseUserLocationList: () => void;
}

interface UserLocationProviderProps {
  children: React.ReactNode;
}

export const userLocationContext =
  createContext<UserLocationContextProps | null>(null);

export const UserLocationProvider = ({
  children,
}: UserLocationProviderProps) => {
  const [userLocationList, setUserLocationInfo] = useState<LocationData[]>([]);
  const {
    data: userLocationData,
    status: userLocationApiStatus,
    fetch,
  } = useFetch<UserLocationResponseData>();

  const userTownList = useMemo(
    () =>
      userLocationList
        .filter((location) => location && location.town)
        .map((location) => location.town),
    [userLocationList],
  );

  const getUserLocation = () => {
    fetch({ callback: getUserLocations });
  };

  const addUserLocation = (locationData: LocationData) => {
    const locationIds = {
      primaryLocationId: userLocationList[0].locationId,
      secondaryLocationId: locationData.locationId,
    };

    fetch({
      callback: () => updateUserLocations(locationIds),
    });
  };

  const deleteUserLocation = (index: number) => {
    const [primaryLocation, secondaryLocation] = [...userLocationList].filter(
      (_, locationIndex) => locationIndex !== index,
    );

    const locationIds = getLocationIds(primaryLocation, secondaryLocation);

    fetch({
      callback: () => updateUserLocations(locationIds),
    });
  };

  const reverseUserLocationList = () => {
    setUserLocationInfo([...userLocationList].reverse());
  };

  useEffect(() => {
    if (userLocationData) {
      const locationList = Object.entries(userLocationData.data).map(
        ([, locationInfo]) => locationInfo,
      );
      setUserLocationInfo(locationList);
    }
  }, [userLocationData]);

  return (
    <userLocationContext.Provider
      value={{
        userLocationList,
        userTownList,
        userLocationApiStatus,
        getUserLocation,
        addUserLocation,
        deleteUserLocation,
        reverseUserLocationList,
      }}
    >
      {children}
    </userLocationContext.Provider>
  );
};

export const useUserLocationContext = () => {
  const context = useContext(userLocationContext);

  if (!context) {
    throw new Error(
      'useUserLocationContext should be used within userLocationContextProvider',
    );
  }

  return context;
};
