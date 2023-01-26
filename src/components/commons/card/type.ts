import {LoadingButtonProps} from '../loading_btn';
import {MyTextProps} from '../my_text';

export interface CardProps {
  headerText?: string | undefined;
  header?: JSX.Element | undefined;
  headerStyle?: MyTextProps | undefined;
  uri?: string | undefined;
  contentText?: string | undefined;
  contentStyle?: MyTextProps | undefined;
  content?: JSX.Element | undefined;
  button?: JSX.Element | undefined;
  leftButtonText?: string | undefined;
  rightButtonText?: string | undefined;
  leftButtonStyle?: LoadingButtonProps | undefined;
  rightButtonStyle?: LoadingButtonProps | undefined;
  space?: number;
}
