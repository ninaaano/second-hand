import { useCallback, useEffect, useState } from 'react';
import { API_STATUS } from '@Constants/index';
import { apiStutus } from '@Types/index';

type responseCallback = () => Promise<Response>;

interface fetchProps {
  fetchFn?: responseCallback;
}

interface useFetchProps extends fetchProps {
  suspense?: boolean;
}

const useFetch = <R,>({ fetchFn, suspense = false }: useFetchProps) => {
  const [promise, setPromise] = useState<Promise<void>>();
  const [data, setData] = useState<R>();
  const [status, setStatus] = useState<apiStutus>(API_STATUS.IDLE);
  const [error, setError] = useState<Error | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetch = useCallback(
    ({ fetchFn }: fetchProps) => {
      if (!fetchFn) return;
      setStatus(API_STATUS.LOADING);

      const resolvePromise = async (res: Response) => {
        const data = await res.json();
        setData(data);
        setStatus(API_STATUS.SUCCESS);
      };

      const rejectPromise = (error: Error) => {
        setStatus(API_STATUS.ERROR);
        setError(error);
        setErrorMessage(error.message);
      };

      setPromise(fetchFn().then(resolvePromise, rejectPromise));
    },
    [fetchFn],
  );

  useEffect(() => {
    fetch({ fetchFn });
  }, [fetchFn]);

  if (suspense) {
    if (status === API_STATUS.LOADING && promise) {
      throw promise;
    }
    if (status === API_STATUS.ERROR) {
      throw error;
    }
  }

  return { data, status, errorMessage, fetch };
};

export default useFetch;
