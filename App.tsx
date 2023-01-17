import 'react-native-gesture-handler';
import React from 'react';
import {NativeBaseProvider, View} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
// import config from './nativebase.config';
import {Root} from '@components/RootComponent';
import {BaseTheme} from '@src/theme';
import {Provider} from 'react-redux';
import {store} from '@src/redux/store';
import '@src/i18n/i18n.config';
// import {en} from '@src/i18n/languages';

const {height} = Dimensions.get('window');
export default function App() {
  // type LanguageObject = typeof en;

  // const ViVo = () => {
  //   for()
  // }

  return (
    <NativeBaseProvider theme={BaseTheme}>
      <View style={styles.screen}>
        <Provider store={store}>
          <Root />
        </Provider>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  screen: {
    height: height,
  },
});
