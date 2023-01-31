import React from 'react';
import {View, Text} from 'native-base';

import {style} from '@styles/style';

import {ViewPdf} from '@src/components/templates/pdf';
import {Pressable} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NavigatorRoute} from '@src/navigation/NavigatorRouteConstant';
import {StackNavigationProp} from '@react-navigation/stack';
import {Layout} from '@src/components/layout';

export function HomeScreen() {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();
  return (
    <Layout navigation={navigation}>
      <View style={style.container}>
        <ViewPdf />
        <Pressable
          onPress={() => navigation.navigate(NavigatorRoute.SAMPLE_UI.LANDING)}
        >
          <Text>Go to Sample UI</Text>
        </Pressable>
      </View>
    </Layout>
  );
}
