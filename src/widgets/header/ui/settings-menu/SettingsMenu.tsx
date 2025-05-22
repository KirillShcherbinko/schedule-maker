import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../language-switcher/LanguageSwitcher';
import { ThemeSwitcher } from '../theme-switcher/ThemeSwitcher';
import { Button } from '@/shared/ui/button';

export const SettingsMenu = () => {
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>{t('header.settings.title', { ns: 'common' })}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <LanguageSwitcher />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ThemeSwitcher />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
