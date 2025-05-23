import { DropdownSelector } from '@/shared/ui/DropdownSelector';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  const options = [
    { label: t('header.settings.language-selector.russian'), value: 'ru', isSelected: currentLang === 'ru' },
    { label: t('header.settings.language-selector.english'), value: 'en', isSelected: currentLang === 'en' },
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
