import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  HomeScreen,
  LoginScreen,
  ForgotPasswordScreen,
  TestAPiServerRequestScreen,
} from '@src/screens';
import {LandingScreen} from '@src/screens/sample_ui';
// import {SampleDetailScreen} from '@src/screens/sample_ui/SampleDetailScreen';
import {NavigatorRoute} from './NavigatorRouteConstant';
import TestComponent from '@src/screens/test_commponents';
import {SlideScreen} from '@src/screens/slide';
import {PaginationScreen} from '@src/screens/pagination';
import {DailogScreen} from '@src/screens/dialog';
import {SampleDetailScreen} from '@src/screens/sample_ui/SampleDetailScreen';
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName={NavigatorRoute.HOME}
      >
        <Drawer.Screen
          name={NavigatorRoute.PAGINATION_SCREEN}
          component={PaginationScreen}
          options={{
            headerShown: false,
            title: 'Pagination Screen',
          }}
        />

        <Drawer.Screen
          name={NavigatorRoute.DIALOG_SCREEN}
          component={DailogScreen}
          options={{
            headerShown: false,
            title: 'Dialog Screen',
          }}
        />
        <Drawer.Screen
          name={NavigatorRoute.SLIDE_SCREEN}
          component={SlideScreen}
          options={{
            headerShown: false,
            title: 'Slide Screen',
          }}
        />
        <Drawer.Screen
          name={NavigatorRoute.TEST_COMPONENT}
          component={TestComponent}
          options={{
            headerShown: false,
            title: 'Test Components',
          }}
        />
        <Drawer.Screen
          name={NavigatorRoute.LOGIN}
          component={LoginScreen}
          options={{
            headerShown: false,
            drawerItemStyle: {display: 'none'},
          }}
        />
        <Drawer.Screen
          name={NavigatorRoute.HOME}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name={NavigatorRoute.FORGOT_PASSWORD}
          component={ForgotPasswordScreen}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name={NavigatorRoute.TEST_API}
          component={TestAPiServerRequestScreen}
          options={{
            headerShown: false,
            title: 'Test API Server Request Screen',
          }}
        />
        <Drawer.Screen
          name={NavigatorRoute.SAMPLE_UI.MAIN}
          component={SampleUINavigation}
          options={{
            headerShown: false,
            title: 'Sample UI Landing Screen',
          }}
        />
      </Drawer.Navigator>
    </>
  );
}

const SampleUINavigation = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={NavigatorRoute.SAMPLE_UI.LANDING}
  >
    <Stack.Screen
      name={NavigatorRoute.SAMPLE_UI.LANDING}
      component={LandingScreen}
    />
    <Stack.Screen
      name={NavigatorRoute.SAMPLE_UI.SAMPLE_DETAIL}
      component={SampleDetailScreen}
    />
  </Stack.Navigator>
);

export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigatorRoute.SAMPLE_UI.LANDING}
    >
      <Stack.Screen
        name={NavigatorRoute.TEST_API}
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
          headerShown: false,
          title: 'Frogot | Screen',
        }}
      />
      <Stack.Screen
        name={NavigatorRoute.HOME}
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

      <Drawer.Screen
        name={NavigatorRoute.SLIDE_SCREEN}
        component={SlideScreen}
        options={{
          headerShown: false,
          title: 'Slide Screen',
        }}
      />
    </Stack.Navigator>
  );
}
