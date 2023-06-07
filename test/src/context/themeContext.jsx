import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider as StyledProvider } from 'styled-components';

import { lightColors, darkColors } from '../styles/color';
import { fontSize, fontWeight } from '../styles/font';

const ThemeContext = createContext({});

const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  if (Object.keys(theme) === 0) {
    throw new Error('useThemeContext should be used within ThemeProvider');
  }

  return theme;
};

const ThemeProvider = ({ children }) => {
  const localTheme = window.localStorage.getItem('theme') || 'light';
  const [themeMode, setThemeMode] = useState(localTheme);
  const theme = { colors: themeMode === 'light' ? lightColors : darkColors, fontSize, fontWeight };

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any,
};

export { useThemeContext, ThemeProvider };
