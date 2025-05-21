import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className='flex flex-col justify-center align-middle'>
      <Outlet />
    </div>
  );
};
