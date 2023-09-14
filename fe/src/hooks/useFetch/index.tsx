import { useEffect, useState } from 'react';

import { API_STATUS, ERROR_MESSAGE } from '@Constants/index';
import { apiStutus } from '@Types/index';

type responseCallback = () => Promise<Response>;

interface fetchProps {
  callback?: responseCallback;
}

const useFetch = <R,>(callback?: responseCallback) => {
  const [data, setData] = useState<R>();
  const [status, setStatus] = useState<apiStutus>(API_STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetch = async ({ callback }: fetchProps) => {
    try {
      if (!callback) return;

      setStatus(API_STATUS.LOADING);

      const res = await callback();
      const data = await res.json();

      if (data) {
        setData(data);
      }

      if (res.status === 400) throw new Error(ERROR_MESSAGE[400]);
      if (res.status === 404) throw new Error(ERROR_MESSAGE[404]);

      setStatus(API_STATUS.SUCCESS);
    } catch (error) {
      if (error instanceof Error) {
        setStatus(API_STATUS.ERROR);
        setErrorMessage(error.message);
      }
    }
  };
  useEffect(() => {
    fetch({ callback });
  }, [callback]);

  return { data, status, errorMessage, fetch };
};

export default useFetch;
