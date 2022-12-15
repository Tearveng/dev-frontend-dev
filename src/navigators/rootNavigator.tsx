import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen, LoginScreen} from '../screens';

const Stack = createStackNavigator();

export function RootStack() {
	return (
		<Stack.Navigator >
			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					headerShown: false,
				}}
			/>
		
		</Stack.Navigator>
	);
}
