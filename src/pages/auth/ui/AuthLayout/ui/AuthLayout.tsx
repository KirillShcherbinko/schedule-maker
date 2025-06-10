import { Header } from '@/widgets/Header';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-background shadow-lg w-full">
      <Header />
      <div className="flex flex-col justify-start items-center bg-block-primary rounded-2xl p-10 w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] max-w-[600px]">
        <Outlet />
      </div>
    </div>
  );
};
