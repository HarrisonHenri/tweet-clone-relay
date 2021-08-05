import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import NewTweet from '../pages/NewTweet';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none" initialRouteName="SignIn">
      <Stack.Screen key="signin" name="SignIn" component={SignIn} />
      <Stack.Screen key="signin" name="SignUp" component={SignUp} />
      <Stack.Screen key="home" name="Home" component={Home} />
      <Stack.Screen key="newTweet" name="NewTweet" component={NewTweet} />
    </Stack.Navigator>
  );
};

export default Routes;
