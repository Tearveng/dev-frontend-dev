import React from 'react';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  LoginScreen,
  ForgotPasswordScreen,
  TestAPiServerRequestScreen,
} from '@screens/index';
import {NavigatorRoute} from './NavigatorRouteConstant';
import {LandingScreen} from '@src/screens/Sample_UI';
import {View, Box, Text} from 'native-base';
import HeaderLeft from '@src/components/navigations/HeaderLeft';
import {SampleDetailScreen} from '@src/screens/Sample_UI/SampleDetailScreen';
import {Image} from 'react-native';
import BookmarkOutline from '@src/assets/logo/outline_bookmark.png';
import {LanguagePicker} from '@src/components/LanguagePicker';

const Stack = createStackNavigator();

export function RootNavigator() {
  const {t} = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigatorRoute.SAMPLE_UI.LANDING_SCREEN}
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

      <Stack.Screen
        name={NavigatorRoute.SAMPLE_UI.LANDING_SCREEN}
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
              <Text
                color={'primary.50'}
                fontSize={'sm'}
                fontWeight={'semibold'}
              >
                {t('sampleUI')}
              </Text>
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
        name={NavigatorRoute.SAMPLE_UI.SAMPLE_DETAIL_SCREEN}
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
    </Stack.Navigator>
  );
}
