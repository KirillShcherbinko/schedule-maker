import { Outlet } from 'react-router-dom';
import { ScheduleContent } from './ScheduleContent';

export const SchedulePage = () => {
  return (
    <>
      <ScheduleContent />
      <Outlet />
    </>
  );
};
