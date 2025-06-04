import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../config/ThemeContext';
import type { TTheme } from '../model/types';

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
