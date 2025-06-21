import { useContext } from 'react';
import { ThemeContext } from '../config/ThemeContext';
import type { TTheme } from '../model/types';
import { LOCAL_STORAGE_THEME_KEY } from '../model/consts';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext must be withtin context Provider');

  const { theme, handleTheme } = context;

  const selectTheme = (newTheme: TTheme) => {
    if (theme === newTheme) return;
    handleTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, selectTheme };
};
