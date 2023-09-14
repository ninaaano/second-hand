import { END_POINT } from '@Constants/endpoint';
import { persistentStorage } from '../App';

export const getUserLocations = async () =>
  await fetch(`${END_POINT.userLocation}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + persistentStorage.get(),
      'Content-Type': 'application/json',
    },
  });

export const getAllLocations = async () =>
  await fetch(`${END_POINT.locations}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + persistentStorage.get(),
      'Content-Type': 'application/json',
    },
  });
