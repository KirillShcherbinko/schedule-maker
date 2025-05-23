import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, type TTheme } from '../config/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext must be withtin context Provider');

  const { theme, setTheme } = context;

  const selectTheme = (newTheme: TTheme) => {
    if (theme === newTheme) return; 
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, selectTheme };
};
