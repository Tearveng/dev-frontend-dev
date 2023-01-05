import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  LoginScreen,
  ForgotPasswordScreen,
  TestAPiServerRequestScreen,
} from '@screens/index';
import {NavigatorRoute} from './NavigatorRouteConstant';

const Stack = createStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigatorRoute.TESTAPI}
        component={TestAPiServerRequestScreen}
        options={{
          headerShown: true,
          title: 'TestAPiServerRequestScreen',
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          headerShown: true,
          title: 'Frogot | Screen',
        }}
      />
      <Stack.Screen
        name={NavigatorRoute.HOME} // "Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: 'View PDF',
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        }}
      />
    </Stack.Navigator>
  );
}
