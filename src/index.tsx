import 'react-native-gesture-handler';

import React, { Suspense } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './hooks/auth';
import Routes from './routes';
import environment from './services/relay.env';
import { AppContainer } from './styles';
import theme from './styles/theme';

const App = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle="light-content" />
          <NavigationContainer>
            <AppContainer>
              <Suspense
                fallback={
                  <ActivityIndicator
                    size="large"
                    color={theme.colors.primary.main}
                  />
                }>
                <Routes />
              </Suspense>
            </AppContainer>
          </NavigationContainer>
        </ThemeProvider>
      </AuthProvider>
    </RelayEnvironmentProvider>
  );
};

export default App;
