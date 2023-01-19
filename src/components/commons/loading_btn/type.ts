import {IButtonProps} from 'native-base';
import {ColorValue} from 'react-native';
import {FontSize, Type, TypeMap} from '../my_text/type';

export interface LoadingButtonProps extends IButtonProps {
  type?: Type;
  spinnerIconColor?: ColorValue;
  text: string;
  isLoading?: boolean;
  fontSize?: FontSize;
  spinnerSize?: 'sm' | 'lg';
}
export const spinnerIconColorMap: TypeMap = {
  primary: '#06b6d4',
  secondary: '#ec4899',
  danger: '#be123c',
  success: '#22c55e',
  warning: '#f97316',
  info: '#0ea5e9',
  dark: 'black',
  white: 'white',
};
