import { useEffect, useState, type ReactNode } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, type TTheme } from '../config/ThemeContext';


type TThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: TThemeProviderProps) => {
  const defaultTheme: TTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TTheme) || 'light';
  const [theme, setTheme] = useState<TTheme>(defaultTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
