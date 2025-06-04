import { useNavigate } from 'react-router-dom';
import Logo from '@/shared/assets/logo.png';
import { SettingsMenu } from './SettingsMenu';
import type { ReactNode } from 'react';

type HeaderProps = {
  children?: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header shadow-sm">
      <div className="flex justify-between items-center mx-auto p-2 md:p-4 max-w-[1280px] min-h-[60px] md:min-h-[80px] px-4 md:px-8">
        <img
          className="w-[80px] md:w-[100px] h-auto transition-all"
          src={Logo}
          alt="logo"
          onClick={() => navigate('/')}
        />
        {children}
        <SettingsMenu />
      </div>
    </header>
  );
};
