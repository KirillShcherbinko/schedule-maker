import { useRoutes, useLocation } from 'react-router-dom';
import { ProtectedRoute } from '@/features/protected-route';
import { HomePage } from '@/pages/home';
import { SchedulePage } from '@/pages/schedule/ui';
import { CreateEventFormModal } from '@/pages/schedule/ui/create-event-form-modal';
import { EditEventFormModal } from '@/pages/schedule/ui/edit-event-form-modal';
import { CreateTagFormModal } from '@/pages/schedule/ui/create-tag-form-modal';
import { EditTagFormModal } from '@/pages/schedule/ui/edit-tag-form-modal';
import { LoginPage } from '@/pages/auth';
import { AuthLayout } from '@/pages/auth';
import { ProfilePage } from '@/pages/profile';
import { RegisterPage } from '@/pages/auth';
import { ForgotPasswordPage } from '@/pages/auth';
import { ResetPasswordPage } from '@/pages/auth';
import { NotFoundPage } from '@/pages/not-found';
import { CreateScheduleFormModal } from '@/pages/profile';
import { EditScheduleFormModal } from '@/pages/profile';

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
            <AuthLayout />
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
