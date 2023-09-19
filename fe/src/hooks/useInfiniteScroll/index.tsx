import { getProducts } from '@Apis/product';
import { RefObject, useEffect, useState } from 'react';

import useFetch from '@Hooks/useFetch';

import { debounce } from '@Utils/debounce';

interface useInfiniteScrollProps {
  locationId: number;
  target: RefObject<HTMLElement>;
}

const useInfiniteScroll = <T,>({
  locationId,
  target,
}: useInfiniteScrollProps) => {
  const [scrolledData, setScrolledData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const { data, fetch } = useFetch<T>();

  const loadMoreData = async () => {
    setIsLoading(true);

    await fetch({
      callback: () => getProducts({ page, locationId }),
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
