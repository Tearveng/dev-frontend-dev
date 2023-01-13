import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {
  HomeScreen,
  LoginScreen,
  ForgotPasswordScreen,
  TestAPiServerRequestScreen,
} from '@screens/index';
import {NavigatorRoute} from './NavigatorRouteConstant';
import {LandingScreen} from '@src/screens/SampleUI';
import {View, Text, Box, Button} from 'native-base';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import HeaderLeft from '@src/components/navigations/HeaderLeft';
import {SampleDetailScreen} from '@src/screens/SampleUI/SampleDetailScreen';
import {Image} from 'react-native';
import BookmarkOutline from '@src/assets/logo/outline_bookmark.png';

const Stack = createStackNavigator();

export function RootNavigator() {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();
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
              width="40"
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Text color={'primary.50'} fontSize={'xl'} fontWeight={'bold'}>
                Sample UI
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
            >
              <Button
                onPress={() =>
                  navigation.navigate(
                    NavigatorRoute.SAMPLE_UI.SAMPLE_DETAIL_SCREEN,
                  )
                }
              >
                New Page
              </Button>
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
