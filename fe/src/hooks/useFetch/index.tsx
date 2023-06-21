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
    headers,
    body,
  }: {
    url?: string;
    isGetData: boolean;
    method?: string;
    headers?: Record<string, string>;
    body?: BodyInit | null | undefined;
  }) => {
    try {
      if (!url) return;

      const res = await fetch(url, {
        method,
        headers,
        body,
      });

      if (isGetData || res.status === 302) {
        const data = await res.json();
        setData(data);
      }
      if (res.status === 400) throw new Error(ERROR_MESSAGE[400]);
      if (res.status === 404) throw new Error(ERROR_MESSAGE[404]);

      if (!res.ok) throw new Error(ERROR_MESSAGE.default);

      setStatus('success');
    } catch (error) {
      setStatus('error');
      if (error instanceof Error) setErrorMessage(ERROR_MESSAGE.default);
    }
  };

  useEffect(() => {
    fetchData({ url, isGetData: true });
  }, [url]);

  return { data, status, errorMessage, fetchData };
};

export default useFetch;
