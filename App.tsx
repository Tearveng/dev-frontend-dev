import React from 'react';
import { NativeBaseProvider, View } from 'native-base';
import {Dimensions, StyleSheet} from 'react-native'
import { BaseTheme } from './src/theme';
// import config from './nativebase.config';
import { Root } from './src/components/RootComponent';
// import { LoginScreen } from './src/screens';
const {height} = Dimensions.get('screen');
export default function App() {
	return (
	
      <NativeBaseProvider theme={BaseTheme} >
        	<View style={styles.container}>
          <Root />
          </View>
		</NativeBaseProvider>
   
	);
}
const styles = StyleSheet.create({
  container: {
    height,
    backgroundColor:"blue"
  },
 
});