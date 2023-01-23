import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MyForm} from '@src/components/commons/my_form';
import {Layout} from '@src/components/layout';
import {ScrollView, View} from 'native-base';
import React from 'react';

const TestComponent = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();
  return (
    <Layout navigation={navigation}>
      <ScrollView height="100%" _web={{height: '100%'}}>
        <View width="95%" height="100%" pl="4">
          {/* <ViewText />
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
          /> */}
          {/* <KeyboardAvoidingView
            h={{
              base: '400px',
              lg: 'auto',
            }}
            width={'100%'}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          > */}
          <MyForm />
          {/* </KeyboardAvoidingView> */}

          {/* <Box height={300} /> */}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default TestComponent;
