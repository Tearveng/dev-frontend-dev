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

import {NavigatorRoute} from './NavigatorRouteConstant';
import TestComponent from '@src/screens/test_commponents';
import {SlideScreen} from '@src/screens/slide';
import {PaginationScreen} from '@src/screens/pagination';
import {DailogScreen} from '@src/screens/dialog';
import {SampleDetailScreen} from '@src/screens/sample_ui/SampleDetailScreen';
import {Localization} from '@src/i18n/languages';
import {useTranslation} from 'react-i18next';
import HeaderLeft from '@src/components/navigations/HeaderLeft';
import {View} from 'native-base';
import {ProgressBarScreen} from '@src/screens/progress_bar';
import {SessionScreen, UploadToBeSignedScreen} from '@src/screens/documents';
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  const {t} = useTranslation();
  return (
    <>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName={NavigatorRoute.HOME}
      >
        {/* SessionScreen */}
        <Drawer.Screen
          name={NavigatorRoute.SESSION_SCREEN}
          component={SessionScreen}
          options={{
            headerShown: false,
            title: 'Sessions',
          }}
        />
        <Drawer.Screen
          name={NavigatorRoute.UPLOAD_SCREEN}
          component={UploadToBeSignedScreen}
          options={{
            headerShown: false,
            title: 'File uploads',
          }}
        />
        <Drawer.Screen
          name={NavigatorRoute.PROGRESS_BAR}
          component={ProgressBarScreen}
          options={{
            headerShown: false,
            title: 'Progress Bar',
          }}
        />

        <Drawer.Screen
          name={NavigatorRoute.PAGINATION_SCREEN}
          component={PaginationScreen}
          options={{
            headerShown: false,
            title: t(Localization('paginationScreen')) ?? '',
          }}
        />

        <Drawer.Screen
          name={NavigatorRoute.DIALOG_SCREEN}
          component={DailogScreen}
          options={{
            headerShown: false,
            title: t(Localization('dialogScreen')) ?? '',
          }}
        />
        <Drawer.Screen
          name={NavigatorRoute.SLIDE_SCREEN}
          component={SlideScreen}
          options={{
            headerShown: false,
            title: t(Localization('slideScreen')) ?? '',
          }}
        />
        <Drawer.Screen
          name={NavigatorRoute.TEST_COMPONENT}
          component={TestComponent}
          options={{
            headerShown: false,
            title: t(Localization('testComponents')) ?? '',
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
            title: t(Localization('forgotPassword')) ?? '',
          }}
        />
        <Drawer.Screen
          name={NavigatorRoute.TEST_API}
          component={TestAPiServerRequestScreen}
          options={{
            headerShown: false,
            title: t(Localization('testAPIServerRequestScreen')) ?? '',
          }}
        />
        <Drawer.Screen
          name={NavigatorRoute.SAMPLE_UI.MAIN}
          component={SampleUI}
          options={{
            headerShown: false,
            title: t(Localization('sampleUILandingScreen')) ?? '',
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
const SampleUI = () => (
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
      options={{
        headerShown: true,
        // headerLeft: () => <HeaderLeft />,
        header: () => (
          <View backgroundColor={'#3700B3'}>
            <HeaderLeft />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);
export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigatorRoute.SAMPLE_UI.LANDING}
    >
      {/* <Stack.Screen name={NavigatorRoute.INDEX} component={DrawerNavigator} /> */}
      {/* <>{DrawerNavigator}</> */}

      {/* <Stack.Screen
        name={NavigatorRoute.TEST_API}
        component={TestAPiServerRequestScreen}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
          title: 'Frogot | Screen',
        }}
      /> */}
      <Stack.Screen name={NavigatorRoute.HOME} component={HomeScreen} />

      {/* <Drawer.Screen
        name={NavigatorRoute.SLIDE_SCREEN}
        component={SlideScreen}
        options={{
          headerShown: false,
          title: 'Slide Screen',
        }}
      /> */}
    </Stack.Navigator>
  );
}
