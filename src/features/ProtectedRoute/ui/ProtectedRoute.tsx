import { useUserStore } from '@/entities/User/model/store';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
  requireAuth?: boolean;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requireAuth = true }) => {
  const { user } = useUserStore();

  if (requireAuth && !user) {
    return <Navigate to="/login" replace />;
  }

  if (!requireAuth && user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
