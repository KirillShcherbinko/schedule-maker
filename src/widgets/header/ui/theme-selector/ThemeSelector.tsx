import { useTranslation } from 'react-i18next';
import { useTheme } from '@/entities/theme/lib/useTheme';
import { DropdownSelector } from '@/shared/ui/DropdownSelector';
import type { TTheme } from '@/entities/theme/config/ThemeContext';

type TThemeOptions = {
  label: string;
  value: TTheme;
  isSelected?: boolean;
};

const BASE_LINK = 'header.settings.theme-selector';

export const ThemeSelector = () => {
  const { t } = useTranslation();
  const { theme, selectTheme } = useTheme();

  const options = [
    { label: t(`${BASE_LINK}.light`), value: 'light', isSelected: theme === 'light' },
    { label: t(`${BASE_LINK}.dark`), value: 'dark', isSelected: theme === 'dark' },
  ] as TThemeOptions[];

  const currentLabel = options.find((opt) => opt.value === theme)?.label ?? '';

  return <DropdownSelector<TTheme> currentLabel={currentLabel} options={options} onChange={selectTheme} />;
};
