import React from 'react';
import {View, Text} from 'native-base';

import {style} from '@styles/style';

import {ViewPdf} from '@src/components/templates/pdf';
import {API_URL} from '@src/config/env';
import {Pressable} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NavigatorRoute} from '@src/navigation/NavigatorRouteConstant';
import {StackNavigationProp} from '@react-navigation/stack';

export function HomeScreen() {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();
  return (
    <View style={style.container}>
      <Text color="blue">env variables: {API_URL}</Text>

      <ViewPdf />
      <Pressable
        onPress={() =>
          navigation.navigate(NavigatorRoute.SAMPLE_UI.LANDING_SCREEN)
        }
      >
        <Text>Go to Sample UI</Text>
      </Pressable>
    </View>
  );
}
