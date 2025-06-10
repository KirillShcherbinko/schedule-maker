import { useUserStore } from '@/entities/User/model/store';
import React, { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  requireAuth?: boolean;
  children: ReactNode;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requireAuth = true, children }) => {
  const { user } = useUserStore();

  if (requireAuth && !user) {
    return <Navigate to="/auth/login" replace />;
  }

  if (!requireAuth && user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
