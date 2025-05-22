import Logo from '@/assets/logo.png';
import { SettingsMenu } from './ui/settings-menu/SettingsMenu';

export const Header = () => {
  return (
    <div className='flex justify-between fixed top-0 p-2 w-1/1 max-w-[1280px]'>
      <img className='w-[150px]' src={Logo} alt='logo' />
      <SettingsMenu />
    </div>
  );
};
