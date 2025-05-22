import { Select, SelectItem, SelectTrigger } from '@/shared/ui/select';
import { SelectContent } from '@radix-ui/react-select';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="m-0 relative">
      <Select onValueChange={handleChange} value={i18n.language}>
        <SelectTrigger>
          {t(`header.settings.language-switcher.${i18n.language === 'ru' ? 'russian' : 'english'}`)}
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ru">{t('header.settings.language-switcher.russian')}</SelectItem>
          <SelectItem value="en">{t('header.settings.language-switcher.english')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
