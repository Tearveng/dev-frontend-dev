import {IAlertProps} from 'native-base';

declare type Status = 'error' | 'success' | 'warning' | 'info';
declare type Variant =
  | 'subtle'
  | 'solid'
  | 'left-accent'
  | 'top-accent'
  | 'outline'
  | 'outline-light';
export interface MyToastProps extends IAlertProps {
  id?: number | undefined;
  title?: string | undefined;
  description?: string | undefined;
  isClosable?: boolean;
  status?: Status | undefined;
  variant?: Variant | undefined;
}

export interface IToastData {
  title?: string | undefined;
  status?: Status | undefined;
  variant?: Variant | undefined;
  description?: string | undefined;
  isClosable?: boolean | undefined;
}
