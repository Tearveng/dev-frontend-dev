import {MyText} from '@src/components/commons/my_text';
import {Divider, View} from 'native-base';
import React from 'react';

const TestComponent = () => {
  return (
    <View width="95%" height="100%" display="flex" alignItems={'center'}>
      <MyText type="primary" fontSize="2xl" mb={2}>
        Text Primary
      </MyText>
      <MyText type="danger" fontSize="2xl" mb={2}>
        Text Danger
      </MyText>
      <MyText type="dark" fontSize="2xl" mb={2}>
        Text Dark
      </MyText>
      <MyText type="info" fontSize="2xl" mb={2}>
        Text Info
      </MyText>
      <MyText type="secondary" fontSize="2xl" mb={2}>
        Text Secondary
      </MyText>
      <MyText type="secondary" fontSize="2xl" mb={2}>
        Text Secondary
      </MyText>
      <MyText type="success" fontSize="2xl" mb={2}>
        Text Success
      </MyText>
      <MyText type="warning" fontSize="2xl" mb={2}>
        Text Warning
      </MyText>
      <MyText type="white" fontSize="2xl" mb={2}>
        Text White
      </MyText>
      <Divider width={'100%'} height="px" backgroundColor={'amber.600'} />
    </View>
  );
};

export default TestComponent;
