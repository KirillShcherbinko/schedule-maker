import { useTranslation } from 'react-i18next';
import { useTheme } from '@/entities/theme';
import { DropdownSelector } from '@/shared/ui/dropdown-selector';
import type { TTheme } from '@/entities/theme';
import { SETTINGS_MENU_NAMESPACE, THEME_SELECTOR_LINK } from '../../../model/consts';

type TThemeOptions = {
  label: string;
  value: TTheme;
  isSelected?: boolean;
};

export const ThemeSelector = () => {
  const { t } = useTranslation();
  const { theme, selectTheme } = useTheme();

  const options = [
    {
      label: t(`${THEME_SELECTOR_LINK}.light`, SETTINGS_MENU_NAMESPACE),
      value: 'light',
      isSelected: theme === 'light',
    },
    { label: t(`${THEME_SELECTOR_LINK}.dark`, SETTINGS_MENU_NAMESPACE), value: 'dark', isSelected: theme === 'dark' },
  ] as TThemeOptions[];

  const currentLabel = options.find((opt) => opt.value === theme)?.label ?? '';

  return <DropdownSelector<TTheme> currentLabel={currentLabel} options={options} onChange={selectTheme} />;
};
