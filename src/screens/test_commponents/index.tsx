import {MyForm} from '@src/components/commons/my_form';
import {Box, Divider, ScrollView, View} from 'native-base';
import React from 'react';
import {ViewButton} from './ViewButton';
import {ViewSearch} from './ViewSearch';
import {ViewText} from './ViewText';

const TestComponent = () => {
  return (
    <ScrollView height="100%" _web={{height: '100%'}}>
      <View
        width="95%"
        height="100%"
        display="flex"
        alignItems={'center'}
        justifyContent="center"
        pl="4"
      >
        <ViewText />
        <Divider
          width={'100%'}
          height="px"
          backgroundColor={'amber.600'}
          mb="3"
        />
        <ViewSearch />
        <Divider
          width={'100%'}
          height="px"
          backgroundColor={'amber.600'}
          my="3"
        />
        <ViewButton />
        <Divider
          width={'100%'}
          height="px"
          backgroundColor={'amber.600'}
          my="3"
        />
        <ViewButton />
        <Divider
          width={'100%'}
          height="px"
          backgroundColor={'amber.600'}
          mb="3"
        />
        <MyForm />
        <Box height={30} />
      </View>
    </ScrollView>
  );
};

export default TestComponent;
