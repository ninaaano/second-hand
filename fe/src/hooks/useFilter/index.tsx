import { useCallback, useState } from 'react';

export const useFilter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFilter = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      setCurrentIndex(index);
    },
    [currentIndex],
  );

  return { currentIndex, handleFilter };
};
