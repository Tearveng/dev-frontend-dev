import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  HomeScreen,
  LoginScreen,
  ForgotPasswordScreen,
  TestAPiServerRequestScreen,
} from '@src/screens';
import {MyText} from '@src/components/commons/my_text';
import {LanguagePicker} from '@src/components/langauge_picker';
import HeaderLeft from '@src/components/navigations/HeaderLeft';
import {Localization} from '@src/i18n/languages';
import {LandingScreen} from '@src/screens/sample_ui';
import {SampleDetailScreen} from '@src/screens/sample_ui/SampleDetailScreen';
import {t} from 'i18next';
import {Box, View} from 'native-base';
import {NavigatorRoute} from './NavigatorRouteConstant';
import {Image} from 'react-native';
import BookmarkOutline from '@src/assets/logo/outline_bookmark.png';
import TestComponent from '@src/screens/test_commponents';
import {SlideScreen} from '@src/screens/slide';
import {PaginationScreen} from '@src/screens/pagination';
import {DailogScreen} from '@src/screens/dialog';
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName={NavigatorRoute.DIALOG_SCREEN}
      >
        <Drawer.Screen
          name={NavigatorRoute.DIALOG_SCREEN}
          component={DailogScreen}
          options={{
            headerShown: false,
            title: 'Dialog Screen',
          }}
        />
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
          name={NavigatorRoute.SAMPLE_UI.LANDING}
          component={LandingScreen}
          options={{
            headerShown: false,
            title: 'Sample UI Landing Screen',
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
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
      <Stack.Screen
        name={NavigatorRoute.SAMPLE_UI.LANDING}
        component={LandingScreen}
        options={{
          headerShown: true,
          title: '',
          headerTitle: () => (
            <View
              width="100%"
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <MyText fontSize={'sm'} fontWeight={'semibold'} type="white">
                {t(Localization.sampleUI)}
              </MyText>
            </View>
          ),
          headerLeft: () => <HeaderLeft />,
          headerRight: () => (
            <Box
              _text={{
                color: 'amber.50',
              }}
              pr={1}
              display={'flex'}
              flexDir={'row'}
              justifyContent={'space-between'}
            >
              <LanguagePicker />
            </Box>
          ),
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }}
      />
      <Stack.Screen
        name={NavigatorRoute.SAMPLE_UI.SAMPLE_DETAIL}
        component={SampleDetailScreen}
        options={{
          headerShown: true,
          title: '',
          headerLeft: () => <HeaderLeft />,
          headerRight: () => (
            <View mr={3}>
              <Image
                source={BookmarkOutline}
                style={{width: 25, height: 25, tintColor: 'white'}}
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#0891b2',
          },
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

export type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};
