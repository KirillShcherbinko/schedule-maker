import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/shared/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './language-selector';
import { ThemeSelector } from './theme-selector';
import { Button } from '@/shared/ui/button';
import { SETTINGS_MENU_NAMESPACE, AUTH_LINK } from '../model/consts';
import { useUserStore } from '@/entities/user/model/store';
import { useNavigate } from 'react-router-dom';

export const SettingsMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const user = useUserStore((state) => state.user);

  const page = user ? '/profile' : '/auth/login';
  const pageText = user ? `${AUTH_LINK}.profile` : `${AUTH_LINK}.auth`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="w-[75px] sm:w-[100px]">{t('title', SETTINGS_MENU_NAMESPACE)}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <LanguageSelector />
        <ThemeSelector />
        <Button
          variant="ghost"
          className="w-full flex items-center justify-start pl-2 pr-2"
          onClick={() => navigate(page)}
        >
          {t(pageText, SETTINGS_MENU_NAMESPACE)}
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
