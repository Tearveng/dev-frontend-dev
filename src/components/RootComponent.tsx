import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './../navigation';
import {linking} from '@src/navigation/linkConfigure';

export const Root = () => {
  return (
    <NavigationContainer linking={linking as any}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
