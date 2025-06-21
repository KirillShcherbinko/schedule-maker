import { Outlet } from 'react-router-dom';
import { ProfileContent } from './profile-content';

export const ProfilePage = () => {
  return (
    <>
      <ProfileContent />
      <Outlet />
    </>
  );
};
