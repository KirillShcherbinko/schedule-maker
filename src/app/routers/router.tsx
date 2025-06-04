import { ProtectedRoute } from '@/features/ProtectedRoute';
import { HomePage } from '@/pages/home';
import { SchedulePage } from '@/pages/schedule/ui/SchedulePage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/auth',
    element: <ProtectedRoute requireAuth={false} />,
    children: [
      { index: true, element: <div>not found</div> },
      { path: 'login', element: <div>login page</div> },
      { path: 'register', element: <div>register page</div> },
      { path: 'forgot-password', element: <div>forgot password</div> },
      { path: 'reset-password', element: <div>reset password</div> },
    ],
  },
  {
    element: <ProtectedRoute requireAuth={true} />,
    children: [{ path: 'profile', element: <div>profile</div> }],
  },
  {
    path: '/schedule/:id',
    element: <SchedulePage />,
  },
  {
    path: '*',
    element: <div>not found</div>,
  },
]);
