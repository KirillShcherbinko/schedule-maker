import { createContext } from 'react';
import type { TTheme } from '../model/types';

export type TThemeContext = {
  theme: TTheme;
  handleTheme: (theme: TTheme) => void;
};

export const ThemeContext = createContext<TThemeContext | null>(null);
export const LOCAL_STORAGE_THEME_KEY = 'theme';
