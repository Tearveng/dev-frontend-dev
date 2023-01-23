import {$ok} from '@src/utils/commons';
import {Box, FormControl, View} from 'native-base';
import React, {useState} from 'react';
import {Controller, FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {Platform} from 'react-native';
import {MyFormProps} from '.';
import {FilePicker} from '../file_picker';
import {LoadingButton} from '../loading_btn';
import {MyInputField} from '../my_input_field';
import {MyText} from '../my_text';

export const MyForm = () => {
  const [data, setData] = useState();
  const [imageBuffer, setImageBuffer] = useState<ArrayBuffer | undefined>();
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm();

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
        onFileChange: (_, buffer) => setImageBuffer(buffer),
      },
      {
        label: 'Phone Number',
        name: 'phonenumber',
        color: 'black',
        defaultValue: '',
        placeholder: 'Your phone number is here...',
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
            console.warn(imageBuffer);
            console.log(data);
          },
        },
      ],
    },
  };
  return (
    <View
      width={obj.form.width}
      height={obj.form.height}
      display={'flex'}
      flexDir={'column'}
      justifyContent={'space-between'}
    >
      {$ok(obj) && obj.input.length > 0 ? (
        obj.input.map((val, index) => (
          <FormControl
            isRequired={val.isRequired}
            isInvalid={val.name in errors}
            key={index}
            height={val.type !== 'file' ? 60 : 250}
            mb={obj.form.space}
          >
            {$ok(val.label) ? (
              <FormControl.Label>{val.label}</FormControl.Label>
            ) : (
              <></>
            )}
            <Controller
              control={control}
              render={({field: {onBlur, onChange, value}}) =>
                val.type !== 'file' ? (
                  <MyInputField
                    height={Platform.OS !== 'web' ? '100%' : '100%'}
                    // borderBottomColor={
                    //   errors[val.name]?.message?.toString()?.length! > 0
                    //     ? 'danger.500'
                    //     : ''
                    // }
                    borderWidth={0}
                    // p={2}
                    borderColor={
                      $ok(errors[val.name]?.message) ? 'danger.500' : ''
                    }
                    onBlur={onBlur}
                    placeholder={
                      $ok(val.placeholder) ? val.placeholder : 'John'
                    }
                    onChangeText={(text: string) => onChange(text)}
                    value={value}
                    color={val.color}
                    placeholderTextColor={val.placeholderTextColor}
                    type={val.type}
                    keyboardType={val.keyboardType ?? 'default'}
                  />
                ) : (
                  <View height={'80%'} width={'100%'}>
                    {Platform.OS !== 'web' ? (
                      <FilePicker
                        onFileChange={(
                          pickerResult,
                          fileBuffer,
                          fileBase64,
                        ) => {
                          $ok(val.onFileChange) &&
                            val.onFileChange!(
                              pickerResult,
                              fileBuffer,
                              fileBase64,
                            );
                        }}
                      />
                    ) : (
                      <input type={'file'} />
                    )}
                  </View>
                )
              }
              name={val.name}
              rules={val.rules}
              defaultValue={val.defaultValue}
            />
            {$ok(errors[val.name]?.message) && (
              <MyText
                type="danger"
                fontSize="xs"
                _web={{fontSize: 'md', my: 2}}
                mt={-2}
              >
                {errors[val.name]?.message as string}
              </MyText>
            )}
          </FormControl>
        ))
      ) : (
        <></>
      )}
      {obj.button.buttons.length > 0 ? (
        obj.button.buttons.map((val, index) => (
          <LoadingButton
            mt={4}
            width={40}
            isLoading={isSubmitting}
            key={index}
            onPress={
              val.type === 'submit'
                ? handleSubmit(val.onPress as SubmitHandler<FieldValues>)
                : val.onPress
            }
            text={$ok(val.text) ? val.text : 'Submit'}
          />
        ))
      ) : (
        <></>
      )}
      <Box height={500} />
    </View>
  );
};
