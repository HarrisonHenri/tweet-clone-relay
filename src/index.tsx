import 'react-native-gesture-handler';

import React, { Suspense } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import environment from './services/relay.env';
import { AppContainer } from './styles';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <RelayEnvironmentProvider environment={environment}>
        <NavigationContainer>
          <AppContainer>
            <Suspense fallback={<ActivityIndicator />}>
              <Routes />
            </Suspense>
          </AppContainer>
        </NavigationContainer>
      </RelayEnvironmentProvider>
    </ThemeProvider>
  );
};

export default App;
