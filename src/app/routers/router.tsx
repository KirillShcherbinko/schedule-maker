import { AuthLayout } from '@/pages/auth/ui/auth-layout/AuthLayout';
import { HomePage } from '@/pages/home';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <div>not found</div> },
      { path: 'login', element: <div>login page</div> },
      { path: 'register', element: <div>register page</div> },
      { path: 'forgot-password', element: <div>forgot password</div> },
      { path: 'reset-password', element: <div>reset password</div> },
    ],
  },
  {
    path: '/profile',
    element: <div>profile</div>,
  },
  {
    path: '/schedule/:id',
    element: <div>edit schedule</div>,
  },
  {
    path: '*',
    element: <div>not found</div>,
  },
]);
