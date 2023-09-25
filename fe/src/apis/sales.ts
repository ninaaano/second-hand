import { END_POINT } from '@Constants/endpoint';
import { persistentStorage } from '../App';

export const getSales = async () =>
  await fetch(`${END_POINT.sale}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + persistentStorage.get(),
      'Content-Type': 'application/json',
    },
  });
