import {IModalProps} from 'native-base';
import {ReactNode} from 'react';

export declare type SizeDialog = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface DialogProps extends IModalProps {
  body?: string | number | ReactNode | ReactNode[];
  header?: string | number | ReactNode | ReactNode[];
  buttons: JSX.Element | JSX.Element[];
  size?: SizeDialog;
  isOpen: boolean;
  onClose?: () => void;
}

export interface DialogHook {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onToggle: () => void;
}
