import React from 'react';
import {View, Text} from 'native-base';

import {style} from '@styles/style';

import {ViewPdf} from '@src/components/templates/pdf';
import {API_URL} from "@src/config/env";
export interface Props {
  route: any;
  navigation: any;
}
export function HomeScreen() {
  return (
    <View style={style.container}>
      <Text color='blue'>
        env variables:  {API_URL}
      </Text>

      <ViewPdf />
    </View>
  );
}
