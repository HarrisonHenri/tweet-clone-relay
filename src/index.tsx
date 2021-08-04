import 'react-native-gesture-handler';

import React, { Suspense } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import theme from './styles/theme';
import { AppContainer } from './styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <AppContainer>
          <Suspense fallback={<ActivityIndicator />}>
            <Routes />
          </Suspense>
        </AppContainer>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
