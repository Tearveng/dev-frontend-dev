import React from 'react';
import {View} from 'native-base';

import {style} from '@styles/style';

import {ViewPdf} from '@src/components/templates/pdf';
export interface Props {
  route: any;
  navigation: any;
}
export function HomeScreen() {
  return (
    <View style={style.container}>
      <ViewPdf />
    </View>
  );
}
