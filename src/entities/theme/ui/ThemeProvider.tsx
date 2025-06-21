import { useState, type ReactNode } from 'react';
import { ThemeContext } from '../config/ThemeContext';
import type { TTheme } from '../model/types';
import { LOCAL_STORAGE_THEME_KEY } from '../model/consts';

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const defaultTheme: TTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TTheme) || 'light';

  document.documentElement.classList.toggle('dark', defaultTheme === 'dark');

  const [theme, setTheme] = useState<TTheme>(defaultTheme);

  const handleTheme = (newTheme: TTheme) => {
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return <ThemeContext.Provider value={{ theme, handleTheme }}>{children}</ThemeContext.Provider>;
};
