import { END_POINT } from '@Constants/endpoint';
import { persistentStorage } from '../App';

export const getUserLocations = async () => {
  const response = await fetch(`${END_POINT.userLocation}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + persistentStorage.get(),
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
};
