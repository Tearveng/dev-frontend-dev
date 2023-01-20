import {Button, Spinner, View} from 'native-base';
import React from 'react';
import {ColorValue} from 'react-native';
import {LoadingButtonProps, spinnerIconColorMap} from '.';
import {MyText} from '../my_text';

export const LoadingButton = ({
  text,
  isLoading = false,
  fontSize,
  type = 'primary',
  spinnerSize = 'sm',
  variant,
  ...props
}: LoadingButtonProps) => {
  const color =
    variant === 'ghost' ||
    variant === 'link' ||
    variant === 'subtle' ||
    variant === 'unstyled'
      ? spinnerIconColorMap['dark']
      : spinnerIconColorMap[type];
  return (
    <Button
      {...props}
      variant={variant}
      colorScheme={type}
      isDisabled={isLoading}
    >
      <View
        width={'100%'}
        display={'flex'}
        flexDir="row"
        justifyContent={isLoading ? 'space-evenly' : 'center'}
        alignItems="center"
      >
        <MyText
          _web={{
            marginRight: '3',
          }}
          color={color}
          fontSize={fontSize}
          textAlign="center"
        >
          {text}
        </MyText>
        {isLoading && (
          <Spinner color={color as ColorValue} size={spinnerSize} />
        )}
      </View>
    </Button>
  );
};
