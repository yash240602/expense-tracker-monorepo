import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Spends from '../pages/Spends';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
  Spends: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Spends" component={Spends} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
