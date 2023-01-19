import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './../navigation/RootNavigator';

export const Root = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
