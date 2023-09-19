import { getProducts } from '@Apis/product';
import { useState, useEffect } from 'react';

import useFetch from '@Hooks/useFetch';

const usePullToRefresh = <T,>() => {
  const [refreshedData, setRefreshedData] = useState<T | null>();
  const [refreshing, setRefreshing] = useState(false);
  const [distance, setDistance] = useState(0);

  const { data, status, errorMessage, fetch } = useFetch<T>();

  const resetState = () => {
    setRefreshing(false);
    setDistance(0);
  };

  const onRefresh = async () => {
    setDistance(40);
    setRefreshing(true);

    setTimeout(async () => {
      await fetch({
        callback: () => getProducts({ page: 0, locationId: 0 }),
      });
      if (data) {
        setRefreshedData(data);
      }
      resetState();
    }, 1000);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touchY = e.touches[0].clientY;
    const windowHeight = window.innerHeight;

    const spinnerY = (100 / windowHeight) * touchY - 20;

    setRefreshing(true);
    setDistance(spinnerY);
  };

  useEffect(() => {
    const handleTouchEnd = () => {
      if (refreshing && distance >= 60) {
        onRefresh();
      } else {
        resetState();
      }
    };

    const container = document.documentElement;
    const { top } = container.getBoundingClientRect();
    if (top < 0) resetState();
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [distance]);

  return { refreshing, distance, status, errorMessage, refreshedData };
};

export default usePullToRefresh;
