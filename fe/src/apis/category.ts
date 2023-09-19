import { END_POINT } from '@Constants/endpoint';
import { persistentStorage } from '../App';

export const getCategories = async () =>
  await fetch(`${END_POINT.category}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + persistentStorage.get(),
      'Content-Type': 'application/json',
    },
  });
