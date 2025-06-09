import { useRoutes, useLocation } from 'react-router-dom';
import { ProtectedRoute } from '@/features/ProtectedRoute';
import { HomePage } from '@/pages/home';
import { SchedulePage } from '@/pages/schedule/ui/SchedulePage';
import { CreateEventFormModal } from '@/pages/schedule/ui/CreateEventFormModal';
import { EditEventFormModal } from '@/pages/schedule/ui/EditEventFormModal';
import { CreateTagFormModal } from '@/pages/schedule/ui/CreateTagFormModal';

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
        path: '/schedule/:scheduleId',
        element: <SchedulePage />,
      },
      {
        path: '*',
        element: <div>not found</div>,
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
  ]);

  return (
    <>
      {mainRoutes}
      {backgroundLocation && modalRoutes}
    </>
  );
};
