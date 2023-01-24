import {
  ColorType,
  SpaceType,
} from 'native-base/lib/typescript/components/types';
import {RegisterOptions, SubmitHandler, FieldValues} from 'react-hook-form';
import {KeyboardTypeOptions, ColorValue} from 'react-native';

export interface MyFormProps {
  form: MyFormFromProps;
  input: MyFormInputProps[];
  button: MyFormButtonProps;
}

interface MyFormInputProps {
  isRequired?: boolean;
  label?: string;
  name: string;
  color?: ColorType | undefined;
  type?: 'text' | 'password' | 'file' | 'select' | undefined;
  onFileChange?:
    | ((
        pickerResult: any,
        arrayBuffer: ArrayBuffer | undefined,
        result: string | undefined,
      ) => void)
    | null
    | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  placeholderTextColor?: ColorValue | undefined;
  defaultValue?: string | undefined;
  placeholder?: string | undefined;
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

interface MyFormFromProps {
  width?: number | string;
  height?: number | string;
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
////android:requestLagacyExternalStorage="true"
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
