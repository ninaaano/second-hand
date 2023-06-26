import { useState, useEffect } from 'react';

import useFetch from '@Hooks/useFetch';

const usePullToRefresh = <T,>(URL: string) => {
  const [refreshedData, setRefreshedData] = useState<T | null>();
  const [refreshing, setRefreshing] = useState(false);
  const [distance, setDistance] = useState(0);

  const { data, status, errorMessage, fetchData } = useFetch<T>(URL);

  const resetState = () => {
    setRefreshing(false);
    setDistance(0);
  };

  const onRefresh = async () => {
    setDistance(40);
    setRefreshing(true);

    setTimeout(async () => {
      await fetchData({
        url: URL,
        isGetData: true,
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
