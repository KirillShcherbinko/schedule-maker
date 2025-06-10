import { useRoutes, useLocation } from 'react-router-dom';
import { ProtectedRoute } from '@/features/ProtectedRoute';
import { HomePage } from '@/pages/home';
import { SchedulePage } from '@/pages/schedule/ui/SchedulePage';
import { CreateEventFormModal } from '@/pages/schedule/ui/CreateEventFormModal';
import { EditEventFormModal } from '@/pages/schedule/ui/EditEventFormModal';
import { CreateTagFormModal } from '@/pages/schedule/ui/CreateTagFormModal';
import { EditTagFormModal } from '@/pages/schedule/ui/EditTagFormModal';
import { LoginPage } from '@/pages/auth/ui/login';
import { AuthPage } from '@/pages/auth';
import { ProfilePage } from '@/pages/profile';
import { RegisterPage } from '@/pages/auth/ui/register';
import { ForgotPasswordPage } from '@/pages/auth/ui/ForgotPassword';
import { ResetPasswordPage } from '@/pages/auth/ui/ResetPassword';
import { NotFoundPage } from '@/pages/NotFound';
import { CreateScheduleFormModal } from '@/pages/profile/ui/CreateScheduleFormModal';
import { EditScheduleFormModal } from '@/pages/profile/ui/EditScheduleFormModal';

export const AppRouter = () => {
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;

  const mainRoutes = useRoutes(
    [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/auth',
        element: (
          <ProtectedRoute requireAuth={false}>
            <AuthPage />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <NotFoundPage /> },
          { path: 'login', element: <LoginPage /> },
          { path: 'register', element: <RegisterPage /> },
          { path: 'forgot-password', element: <ForgotPasswordPage /> },
          { path: 'reset-password', element: <ResetPasswordPage /> },
        ],
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute requireAuth={false}>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/schedule/:scheduleId',
        element: <SchedulePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
    backgroundLocation || location,
  );

  const modalRoutes = useRoutes([
    {
      path: '/schedule/:scheduleId/event/create',
      element: <CreateEventFormModal />,
    },
    {
      path: '/schedule/:scheduleId/event/:eventId/edit',
      element: <EditEventFormModal />,
    },
    {
      path: '/schedule/:scheduleId/tag/create',
      element: <CreateTagFormModal />,
    },
    {
      path: '/schedule/:scheduleId/tag/:tagId/edit',
      element: <EditTagFormModal />,
    },
    {
      path: '/profile/:scheduleId/create',
      element: <CreateScheduleFormModal />,
    },
    {
      path: '/schedule/:scheduleId/edit',
      element: <EditScheduleFormModal />,
    },
  ]);

  return (
    <>
      {mainRoutes}
      {backgroundLocation && modalRoutes}
    </>
  );
};
