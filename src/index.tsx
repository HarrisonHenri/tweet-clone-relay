import 'react-native-gesture-handler';

import React, { Suspense } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import { AppColors } from './styles/global';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Suspense fallback={<ActivityIndicator />}>
            <Routes />
          </Suspense>
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: AppColors.GRAY },
});
