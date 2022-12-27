import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { Box } from 'native-base';
import { RootStack } from '../navigators/rootNavigator';

export const Root = () => {
	// const [lightBg, darkBg] = useToken(
	// 	'colors',
	// 	['coolGray.50', 'blueGray.900'],
	// 	'blueGray.900',
	// );
	// const bgColor = useColorModeValue(lightBg, darkBg);

	return (
		<NavigationContainer>
			{/*<Box*/}
			{/*	flex={1}*/}
			{/*	w="100px"*/}
			{/*	_light={{*/}
			{/*		bg: 'cyan.700',*/}
			{/*	}}*/}
			{/*	_dark={{*/}
			{/*		bg: 'cyan.700',*/}
			{/*	}}*/}
			{/*	// bg={useColorModeValue('', 'blueGray.900')}*/}
			{/*	_web={{*/}
			{/*		overflowX: 'hidden',*/}
			{/*	}}*/}
			{/*>*/}
			{/*	<RootStack />*/}
			{/*</Box>*/}
				<RootStack />
		</NavigationContainer>
	);
};
