import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/shared/ui/DropdownMenu';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';
import { ThemeSelector } from './ThemeSelector';
import { Button } from '@/shared/ui/Button';
import { BASE_NAMESPACE } from '../../../config/consts';

const BASE_LINK = 'settings.title';

export const SettingsMenu = () => {
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="w-[75px] sm:w-[100px]">{t(BASE_LINK, BASE_NAMESPACE)}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <LanguageSelector />
        <ThemeSelector />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
