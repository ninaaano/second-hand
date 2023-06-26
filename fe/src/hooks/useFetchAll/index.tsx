import { useEffect, useState } from 'react';

import { ERROR_MESSAGE } from '@Constants/index';

const useFetchAll = <T,>(urls: string[]) => {
  const [data, setData] = useState<T[]>([]);
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>(
    'loading',
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const JWTToken = localStorage.getItem('JWTToken');

        const headers = {
          Authorization: `Bearer ${JWTToken}`,
          'Content-Type': 'application/json',
        };

        const requests = urls.map((url) => fetch(url, { headers }));

        const responses = await Promise.all(requests);

        const responseData = await Promise.all(
          responses.map((res) => {
            if (res.status === 400) throw new Error(ERROR_MESSAGE[400]);
            if (res.status === 404) throw new Error(ERROR_MESSAGE[404]);
            if (!res.ok) throw new Error(ERROR_MESSAGE.default);

            return res.json();
          }),
        );

        setData(responseData);
        setStatus('success');
      } catch (error) {
        setStatus('error');
        if (error instanceof Error) setErrorMessage(ERROR_MESSAGE.default);
      }
    };

    fetchData();
  }, [urls]);

  return { data, status, errorMessage };
};

export default useFetchAll;
