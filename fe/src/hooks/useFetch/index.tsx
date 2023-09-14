import { useEffect, useState } from 'react';

import { ERROR_MESSAGE } from '@Constants/index';

const useFetch = <T,>(url?: string) => {
  const [data, setData] = useState<T>();
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>(
    'loading',
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fetchData = async ({
    url,
    isGetData = false,
    method = 'GET',
    contentsType = { 'Content-Type': 'application/json' },
    body,
  }: {
    url?: string;
    isGetData: boolean;
    method?: string;
    contentsType?: object;
    body?: BodyInit | null | undefined;
  }) => {
    try {
      if (!url) return;

      const JWTToken = localStorage.getItem('JWTToken');
      const headers = {
        Authorization: `Bearer ${JWTToken}`,
        ...contentsType,
      };
      const res = await fetch(url, {
        method,
        headers,
        body,
      });
      const data = await res.json();

      if (isGetData || res.status === 302) {
        setData(data);
      }

      if (res.status === 400) throw new Error(ERROR_MESSAGE[400]);
      if (res.status === 404) {
        if (data.message === '토큰 시간 만료') {
          localStorage.removeItem('JWTToken');
          throw new Error(ERROR_MESSAGE.timeOut);
        }
        throw new Error(ERROR_MESSAGE[404]);
      }

      if (!res.ok) {
        throw new Error(ERROR_MESSAGE.default);
      }

      setStatus('success');
    } catch (error) {
      if (error instanceof Error) {
        setStatus('error');
        setErrorMessage(error.message);
      }
    }
  };
  useEffect(() => {
    fetchData({ url, isGetData: true });
  }, [url]);

  return { data, status, errorMessage, fetchData };
};

export default useFetch;
