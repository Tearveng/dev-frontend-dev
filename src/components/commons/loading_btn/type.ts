import {IButtonProps} from 'native-base';
import {ColorValue} from 'react-native';
import {FontSize, Type} from '../my_text/type';

export interface LoadingButtonProps extends IButtonProps {
  type?: Type;
  text: string;
  isLoading: boolean;
  fontSize?: FontSize;
  indecatorColor?: ColorValue;
}
