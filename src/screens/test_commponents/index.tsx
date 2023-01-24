import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MyForm, MyFormProps} from '@src/components/commons/my_form';
import {Layout} from '@src/components/layout';
import {$ok} from '@src/utils/commons';
import {ScrollView, View} from 'native-base';
import React, {useState} from 'react';

const TestComponent = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();

  const [_, setData] = useState<any | undefined>();
  const [imageBuffer, setImageBuffer] = useState<ArrayBuffer | undefined>();
  const obj: MyFormProps = {
    form: {
      width: '100%',
      height: '100%',
      space: 7,
    },
    input: [
      {
        isRequired: true,
        label: 'First Name',
        name: 'firstname',
        color: 'black',
        defaultValue: '',
        placeholder: 'Your first name here...',
        rules: {
          required: 'Field is required',
          validate: (value: string) => {
            return value.length < 3
              ? `firstname must has more than 3 charactors`
              : undefined;
          },
        },
      },
      {
        isRequired: true,
        label: 'Last Name',
        name: 'lastname',
        color: 'black',
        defaultValue: '',
        placeholder: 'Your last name here...',
        rules: {
          required: 'Field is required',
          validate: (value: string) => {
            return value.length < 5
              ? `lastname must has more than 5 charactors`
              : undefined;
          },
        },
      },
      {
        isRequired: true,
        label: 'Email',
        name: 'email',
        color: 'black',
        defaultValue: '',
        placeholder: 'Your email here...',
        rules: {
          required: 'Email is required!',
          validate: (val: string) => {
            let pattern =
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            let result = val.match(pattern);
            return $ok(result) ? undefined : 'Email is invalid!';
          },
        },
      },
      {
        label: 'Document',
        name: 'file',
        type: 'file',
        onFileChange: (_, buffer) => {
          setImageBuffer(buffer);
        },
      },
      {
        label: 'Phone Number',
        name: 'phonenumber',
        color: 'black',
        defaultValue: '',
        placeholder: 'Your phone number is here...',
      },
      {
        label: 'Select',
        name: 'select',
        color: 'black',
        type: 'select',
      },
    ],
    button: {
      container: {},
      buttons: [
        {
          text: 'Save',
          type: 'submit',
          onPress: dataobj => {
            setData({...dataobj, file: imageBuffer});
          },
        },
      ],
    },
  };

  return (
    <Layout navigation={navigation}>
      <ScrollView height="100%" _web={{height: '200vh'}}>
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
          <MyForm button={obj.button} form={obj.form} input={obj.input} />
          {/* </KeyboardAvoidingView> */}

          {/* <Box height={300} /> */}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default TestComponent;
