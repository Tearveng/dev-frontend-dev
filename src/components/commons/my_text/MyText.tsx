import React from 'react';
import {Text} from 'native-base';
import {Props, TypeMap} from './type';

export const MyText = ({
  children,
  fontSize = 'sm',
  type = 'dark',
  ...props
}: Props) => {
  const typeMap: TypeMap = {
    primary: 'primary.500',
    secondary: 'secondary.500',
    danger: 'danger.700',
    success: 'success.500',
    warning: 'warning.500',
    info: 'info.500',
    dark: 'black',
    white: 'white',
  };
  return (
    <Text color={typeMap[type]} fontSize={fontSize} {...props}>
      {children}
    </Text>
  );
};
