import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/shared/ui/DropdownMenu';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';
import { ThemeSelector } from './ThemeSelector';
import { Button } from '@/shared/ui/Button';
import { BASE_NAMESPACE, SETTINGS_MENU_LINK } from '../../../config/consts';
import { useUserStore } from '@/entities/User/model/store';
import { useNavigate } from 'react-router-dom';

export const SettingsMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const user = useUserStore((state) => state.user);

  const page = user ? '/profile' : '/auth/login';
  const pageText = user ? `${SETTINGS_MENU_LINK}.profile` : `${SETTINGS_MENU_LINK}.auth`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="w-[75px] sm:w-[100px]">{t(`${SETTINGS_MENU_LINK}.title`, BASE_NAMESPACE)}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <LanguageSelector />
        <ThemeSelector />
        <Button variant="ghost" className="w-full flex items-center justify-start pl-2 pr-2" onClick={() => navigate(page)}>{t(pageText, BASE_NAMESPACE)}</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
