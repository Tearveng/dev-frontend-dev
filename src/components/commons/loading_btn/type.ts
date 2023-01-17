import {IButtonProps} from 'native-base';

export interface LoadingButtonProps extends IButtonProps {
  text: string;
  isLoading: boolean;
}
