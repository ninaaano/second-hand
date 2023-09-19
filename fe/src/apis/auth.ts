import { END_POINT } from '@Constants/endpoint';
import { persistentStorage } from '../App';

export const authLogin = async () => {
  const url = new URL(window.location.href);
  const queryCode = url.searchParams.get('code');

  return await fetch(`${END_POINT.login}?code=${queryCode}&clientType=fe`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const authSignUp = async (locationId: number) =>
  await fetch(END_POINT.signUp, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + persistentStorage.get(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      locationId,
    }),
  });
