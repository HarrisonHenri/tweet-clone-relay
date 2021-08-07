import 'react-native-gesture-handler';

import React, { Suspense } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import { AppContainer } from './styles';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
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
