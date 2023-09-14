import { END_POINT } from '@Constants/endpoint';

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
