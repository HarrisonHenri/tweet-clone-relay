import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthRoutes = () => {
  const Auth = createStackNavigator();

  return (
    <Auth.Navigator headerMode="none" initialRouteName="SignIn">
      <Auth.Screen key="signin" name="SignIn" component={SignIn} />
      <Auth.Screen key="signup" name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
