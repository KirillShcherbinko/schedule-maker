import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/shared/ui/DropdownMenu';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../language-selector/LanguageSelector';
import { ThemeSelector } from '../theme-selector/ThemeSelector';
import { Button } from '@/shared/ui/Button';

export const SettingsMenu = () => {
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className='w-[75px] sm:w-[100px]'>{t('header.settings.title', { ns: 'common' })}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <LanguageSelector />
        <ThemeSelector />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
