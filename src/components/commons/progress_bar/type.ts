import {ColorType} from 'native-base/lib/typescript/components/types';
import {Animated, OpaqueColorValue} from 'react-native';
import {MyTextProps} from '../my_text/type';

export interface ProgressBarProps {
  step: number;
  steps: number;
  duration?: number | undefined;
  width?: number | string | undefined;
  height?: number | undefined;
  color?:
    | string
    | Animated.Value
    | Animated.AnimatedInterpolation<string | number>
    | OpaqueColorValue
    | undefined;
  backgroundColor?: ColorType;
  textStyle?: MyTextProps;
}
