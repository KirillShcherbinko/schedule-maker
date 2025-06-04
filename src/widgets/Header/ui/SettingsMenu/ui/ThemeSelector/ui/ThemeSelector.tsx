import { useTranslation } from 'react-i18next';
import { useTheme } from '@/entities/Theme/lib/useTheme';
import { DropdownSelector } from '@/shared/ui/DropdownSelector';
import type { TTheme } from '@/entities/Theme/model/types';
import { BASE_NAMESPACE, THEME_SELECTOR_LINK } from '../../../../../config/consts';

type TThemeOptions = {
  label: string;
  value: TTheme;
  isSelected?: boolean;
};

export const ThemeSelector = () => {
  const { t } = useTranslation();
  const { theme, selectTheme } = useTheme();

  const options = [
    { label: t(`${THEME_SELECTOR_LINK}.light`, BASE_NAMESPACE), value: 'light', isSelected: theme === 'light' },
    { label: t(`${THEME_SELECTOR_LINK}.dark`, BASE_NAMESPACE), value: 'dark', isSelected: theme === 'dark' },
  ] as TThemeOptions[];

  const currentLabel = options.find((opt) => opt.value === theme)?.label ?? '';

  return <DropdownSelector<TTheme> currentLabel={currentLabel} options={options} onChange={selectTheme} />;
};
