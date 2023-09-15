import { getUserLocations } from '@Apis/locationApi';
import { createContext, useContext, useEffect, useState } from 'react';
import useFetch from '@Hooks/useFetch';
import { LocationData, apiStutus } from '@Types/index';

interface UserLocationContextProps {
  userLocationApiStatus: apiStutus;
  userLocationInfo: LocationData[];
  userCurrentTown: string;
  userTownList: string[];
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
  const [userLocationInfo, setUserLocationInfo] = useState<LocationData[]>([]);
  const [userTownList, setUserTownList] = useState<string[]>([]);
  const {
    data: userLocationData,
    status: userLocationApiStatus,
    fetch,
  } = useFetch<LocationData[]>();

  const userCurrentTown = userTownList[0];

  const getUserLocation = () => {
    fetch({ callback: getUserLocations });
  };

  useEffect(() => {
    if (userLocationData) {
      const locationList = Object.entries(userLocationData).map(
        ([, locationInfo]) => locationInfo,
      );

      const townList = locationList.filter((locationInfo) => {
        if (locationInfo) return locationInfo.town;
      });

      setUserLocationInfo(locationList);
      setUserTownList(townList as unknown as string[]);
    }
  }, [userLocationData]);

  return (
    <userLocationContext.Provider
      value={{
        userLocationApiStatus,
        userLocationInfo,
        userCurrentTown,
        userTownList,
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
