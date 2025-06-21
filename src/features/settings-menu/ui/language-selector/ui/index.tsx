import { DropdownSelector } from '@/shared/ui/dropdown-selector';
import { SETTINGS_MENU_NAMESPACE, LANGUAGE_SELECTOR_LINK } from '../../../model/consts';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  const options = [
    {
      label: t(`${LANGUAGE_SELECTOR_LINK}.russian`, SETTINGS_MENU_NAMESPACE),
      value: 'ru',
      isSelected: currentLang === 'ru',
    },
    {
      label: t(`${LANGUAGE_SELECTOR_LINK}.english`, SETTINGS_MENU_NAMESPACE),
      value: 'en',
      isSelected: currentLang === 'en',
    },
  ];

  const currentLabel = options.find((opt) => opt.value === currentLang)?.label ?? '';

  return (
    <DropdownSelector<string>
      currentLabel={currentLabel}
      options={options}
      onChange={(lang) => i18n.changeLanguage(lang)}
    />
  );
};
