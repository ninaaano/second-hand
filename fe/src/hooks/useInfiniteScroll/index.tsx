import { RefObject, useEffect, useState } from 'react';

import useFetch from '@Hooks/useFetch';

import { debounce } from '@Utils/debounce';

const useInfiniteScroll = <T,>(URL: string, target: RefObject<HTMLElement>) => {
  const [scrolledData, setScrolledData] = useState<T | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const { data, fetchData } = useFetch<T>();

  const loadMoreData = async () => {
    setIsLoading(true);

    await fetchData({
      url: `${URL}?page=${page}&size=10`,
      isGetData: true,
    });

    setPage((prevPage) => prevPage + 1);
    setScrolledData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (target.current) {
        const { bottom } = target.current.getBoundingClientRect();
        if (bottom / 2 <= window.innerHeight && !isLoading) {
          loadMoreData();
        }
      }
    }, 200);

    if (!isLoading) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  return { scrolledData };
};

export default useInfiniteScroll;
