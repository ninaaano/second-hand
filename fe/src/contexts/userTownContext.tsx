import { getUserLocations } from '@Apis/locationApi';
import { createContext, useContext, useEffect, useState } from 'react';
import useFetch from '@Hooks/useFetch';
import { LocationData, apiStutus } from '@Types/index';

interface UserLocationContextProps {
  status: apiStutus;
  userLocationList: LocationData[];
  fetchUserLocation: () => void;
  setUserLocationInfo: (userLocationInfo: LocationData[]) => void;
}

interface UserLocationProviderProps {
  children: React.ReactNode;
}

export const userLocationContext =
  createContext<UserLocationContextProps | null>(null);

export const UserLocationProvider = ({
  children,
}: UserLocationProviderProps) => {
  const [userLocationList, setUserLocation] = useState<LocationData[]>([]);
  const [currentTown, setCurrentTown] = useState<LocationData | null>(null);
  const { data, status, fetch } = useFetch<LocationData[]>();

  const fetchUserLocation = () => {
    fetch({ callback: getUserLocations });
  };

  const setUserLocationInfo = (userLocationInfo: LocationData[]) => {
    setUserLocation(userLocationInfo);
  };

  useEffect(() => {
    if (data) {
      const userLocationData = data as LocationData[];
      const towns = Object.entries(userLocationData)
        .map(([, locationInfo]) => locationInfo)
        .filter((locationInfo) => {
          if (locationInfo) return locationInfo.town;
        });

      setUserLocation(towns);
    }
  }, [data]);

  return (
    <userLocationContext.Provider
      value={{
        status,
        userLocationList,
        fetchUserLocation,
        setUserLocationInfo,
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
