import { Outlet } from 'react-router-dom';
import { ProfileContent } from './ProfileContent';

export const ProfilePage = () => {
  return (
    <>
      <ProfileContent />
      <Outlet />
    </>
  );
};
