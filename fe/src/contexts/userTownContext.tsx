import { getUserLocations } from '@Apis/locationApi';
import { createContext, useContext, useEffect, useState } from 'react';
import useFetch from '@Hooks/useFetch';
import {
  LocationData,
  UserLocationResponseData,
  apiStutus,
} from '@Types/index';

interface UserLocationContextProps {
  userLocationList: LocationData[];
  userLocationApiStatus: apiStutus;
  getUserLocation: () => void;
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

  const getUserLocation = () => {
    fetch({ callback: getUserLocations });
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
        userLocationApiStatus,
        getUserLocation,
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
