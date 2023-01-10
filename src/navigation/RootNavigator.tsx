import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ForgotPasswordScreen, LoginScreen} from '@src/screens';
import {createDrawerNavigator} from "@react-navigation/drawer";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export function DrawerNavigator(){
    return(
        <>
            <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
                <Drawer.Screen
                    name="Login" component={LoginScreen}
                    options={{
                        headerShown: false,
                        drawerItemStyle: {display: 'none'},
                    }}
                />
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="ForgotPassword"
                    component={ForgotPasswordScreen}
                    options={{
                        headerShown: false
                    }}
                />
            </Drawer.Navigator>
        </>
    )
}
export function RootNavigator() {
    return (
        <>
            <Stack.Navigator screenOptions={{headerShown: false}}>
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
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
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
        </>
    );
}

export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};
