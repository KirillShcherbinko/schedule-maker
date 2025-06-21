import { Outlet } from 'react-router-dom';
import { ScheduleContent } from './schedule-content';

export const SchedulePage = () => {
  return (
    <>
      <ScheduleContent />
      <Outlet />
    </>
  );
};
