import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login, ForgotPassword} from '../screens';

const Stack = createStackNavigator();

export function RootStack() {
	return (
		<Stack.Navigator >
			<Stack.Screen
				name="Login"
				component={Login}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="ForgotPassword"
				component={ForgotPassword}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>

		</Stack.Navigator>
	);
}
