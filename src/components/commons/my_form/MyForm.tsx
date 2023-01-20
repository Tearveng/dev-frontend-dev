import {$ok} from '@src/utils/commons';
import {FormControl, View, VStack} from 'native-base';
import {SpaceType} from 'native-base/lib/typescript/components/types';
import React from 'react';
import {
  Controller,
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import {LoadingButton} from '../loading_btn';
import {MyInputField} from '../my_input_field';
import {MyText} from '../my_text';
//rules type Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;

interface MyFormProps {
  form: MyFormFromProps;
  input: MyFormInputProps[];
  button: MyFormButtonProps;
}

interface MyFormInputProps {
  label: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

interface MyFormFromProps {
  width?: number | string;
  space?:
    | 'gutter'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | SpaceType;
}
interface MyFormButtonProps {
  container?: MyFormButtonContainerProps;
  buttons: MyFormButtonButtonsProps[];
}
interface MyFormButtonContainerProps {}
interface MyFormButtonButtonsProps {
  text: string;
  type: 'submit' | 'button';
  onPress?: (data: SubmitHandler<FieldValues> | any) => void;
}
// function delay(milliseconds: number) {
//   return new Promise(resolve => setTimeout(resolve, milliseconds));
// }
export const MyForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm();
  console.log('isSubmitting=>', isSubmitting);
  console.log('errors', errors);
  // const onSubmit = (data: any) => {
  //   delay(5000).then(() => console.log('submiting with ', data));
  // };
  const obj: MyFormProps = {
    form: {
      width: '90%',
      space: 7,
    },
    input: [
      {
        label: 'First Name',
        name: 'firstname',
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
        label: 'Last Name',
        name: 'lastname',
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
        label: 'Email',
        name: 'email',
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
        label: 'Phone Number',
        name: 'phonenumber',
        defaultValue: '',
        placeholder: 'Your phone number is here...',
        rules: {
          required: 'Phone number is required',
        },
      },
    ],
    button: {
      container: {},
      buttons: [{text: 'Save', type: 'submit', onPress: () => {}}],
    },
  };
  return (
    <VStack width={obj.form.width} space={obj.form.space}>
      {$ok(obj) && obj.input.length > 0 ? (
        obj.input.map((val, index) => (
          <FormControl
            isRequired
            isInvalid={val.name in errors}
            key={index}
            height={50}
          >
            <FormControl.Label>{val.label}</FormControl.Label>
            <Controller
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <MyInputField
                  height={'100%'}
                  _web={{
                    _focus: {
                      outlineStyle: 'none',
                    },
                    _hover: {
                      outlineStyle: 'none',
                    },
                  }}
                  p={0}
                  borderBottomColor={$ok(errors[val.name]) ? 'danger.500' : ''}
                  borderColor={$ok(errors[val.name]) ? 'danger.500' : ''}
                  onBlur={onBlur}
                  placeholder={$ok(val.placeholder) ? val.placeholder : 'John'}
                  onChangeText={(text: string) => onChange(text)}
                  value={value}
                  color="black"
                />
              )}
              name={val.name}
              rules={val.rules}
              defaultValue={val.defaultValue}
            />
            {$ok(errors[val.name]?.message) && (
              <MyText type="danger" fontSize="sm" mb={'2'}>
                {errors[val.name]?.message as string}
              </MyText>
            )}
          </FormControl>
        ))
      ) : (
        <></>
      )}
      <View mt={5}>
        {obj.button.buttons.length > 0 ? (
          obj.button.buttons.map((val, index) => (
            <LoadingButton
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
      </View>
    </VStack>
  );
};
