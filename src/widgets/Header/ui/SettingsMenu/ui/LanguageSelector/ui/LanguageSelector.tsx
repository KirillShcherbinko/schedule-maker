import { DropdownSelector } from '@/shared/ui/DropdownSelector';
import { BASE_NAMESPACE, LANGUAGE_SELECTOR_LINK } from '@/widgets/Header/config/consts';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  const options = [
    { label: t(`${LANGUAGE_SELECTOR_LINK}.russian`, BASE_NAMESPACE), value: 'ru', isSelected: currentLang === 'ru' },
    { label: t(`${LANGUAGE_SELECTOR_LINK}.english`, BASE_NAMESPACE), value: 'en', isSelected: currentLang === 'en' },
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
