import React from 'react';
import 'react-native-gesture-handler';
import { LogBox, StatusBar, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

LogBox.ignoreAllLogs(true)

export default function App() {
 return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}