import { useState, useCallback, useEffect, useReducer } from 'react';

const fetchReducer = () => {};

const useFetch = (url, method = 'GET', body = null, skip = false) => {
  // const [fetchState, fetchDispatch] = useReducer(fetchReducer, {
  //   loading: false,
  //   data: null,
  //   error: false,
  // });

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (method !== 'GET') {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Fetch failed for URL: ${url}`);
      }

      if (method !== 'DELETE') {
        const result = await response.json();

        setData(result.data);
      } else {
        setData(null);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, method, body]);

  useEffect(() => {
    if (skip) return;
    fetchData();
  }, []);

  return { fetchData, data, error, loading };
};

export default useFetch;
