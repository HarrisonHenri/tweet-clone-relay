import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import NewTweet from '../pages/NewTweet';

const PrivateRoutes = () => {
  const Private = createStackNavigator();

  return (
    <Private.Navigator headerMode="none" initialRouteName="Home">
      <Private.Screen key="home" name="Home" component={Home} />
      <Private.Screen key="newtweet" name="NewTweet" component={NewTweet} />
    </Private.Navigator>
  );
};

export default PrivateRoutes;
