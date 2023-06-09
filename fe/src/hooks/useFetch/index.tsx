import { useEffect, useState } from 'react';

import { ERROR_MESSAGE } from '@Constants/index';

const useFetch = (url: string) => {
  const [data, setData] = useState({});
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>(
    'loading',
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchData = async ({
    url,
    isGetData = false,
    method = 'GET',
    body,
  }: {
    url: string;
    isGetData: boolean;
    method?: string;
    body?: BodyInit | null | undefined;
  }) => {
    try {
      const res = await fetch(url, {
        method,
        body,
      });

      // TODO(덴): 에러타입 백엔드와 협의해서, 에러 타입에 따른 분기 처리 완료하기
      if (res.status === 400) throw new Error(ERROR_MESSAGE[400]);
      if (res.status === 404) throw new Error(ERROR_MESSAGE[404]);

      if (!res.ok) throw new Error(ERROR_MESSAGE.default);

      if (isGetData) {
        const data = await res.json();
        setData(data);
      }
      setStatus('success');
    } catch (error) {
      setStatus('error');
      if (error instanceof Error) setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchData({ url, isGetData: true });
  }, []);

  return { data, status, errorMessage, fetchData };
};

export default useFetch;
