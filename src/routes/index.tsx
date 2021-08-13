import React from 'react';
import { ActivityIndicator } from 'react-native';

import { useAuth } from '../hooks/auth';
import AuthRoutes from './auth.routes';
import PrivateRoutes from './private.routes';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <ActivityIndicator />;
  }

  if (user) {
    return <PrivateRoutes />;
  }

  return <AuthRoutes />;
};

export default Routes;
