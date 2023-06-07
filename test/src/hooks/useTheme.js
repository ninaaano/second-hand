import { useCallback } from 'react';
import { useThemeContext } from '../context/themeContext';

const useTheme = () => {
  const themeContext = useThemeContext();
  const { themeMode, setThemeMode } = themeContext;

  const toggleTheme = useCallback(() => {
    if (themeMode === 'light') {
      setThemeMode('dark');
      window.localStorage.setItem('theme', 'dark');
      return;
    }
    setThemeMode('light');
    window.localStorage.setItem('theme', 'light');
  }, [themeMode]);

  return [themeMode, toggleTheme];
};

export default useTheme;
