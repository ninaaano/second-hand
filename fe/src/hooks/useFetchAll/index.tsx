import { useEffect, useState } from 'react';

import { ERROR_MESSAGE } from '@Constants/index';

const useFetchAll = <T,>(urls: string[]) => {
  const [data, setData] = useState<T[]>([]);
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>(
    'loading',
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async ({
      urls,
      method = 'GET',
      body,
    }: {
      urls: string[];
      method?: string;
      body?: BodyInit | null | undefined;
    }) => {
      try {
        const JWTToken = localStorage.getItem('JWTToken');

        console.log('내부', urls);
        const headers = {
          Authorization: `Bearer ${JWTToken}`,
          'Content-Type': 'application/json',
        };

        const requests = urls.map((url) =>
          fetch(url, {
            method,
            headers,
            body,
          }),
        );

        const responses = await Promise.all(requests);

        const responseData = await Promise.all(
          responses.map((res) => res.json()),
        );
        console.log(responseData);
        setData(responseData);
        setStatus('success');
      } catch (error) {
        setStatus('error');
        if (error instanceof Error) setErrorMessage(ERROR_MESSAGE.default);
      }
    };

    fetchData({ urls: urls });
  }, []);

  return { data, status, errorMessage };
};

export default useFetchAll;
