import {Button, Spinner, View} from 'native-base';
import React from 'react';
import {ColorValue} from 'react-native';
import {LoadingButtonProps, spinnerIconColorMap} from '.';
import {MyText} from '../my_text';

export const LoadingButton = ({
  text,
  isLoading = false,
  fontSize,
  type = 'white',
  spinnerSize = 'sm',
  ...props
}: LoadingButtonProps) => {
  return (
    <Button {...props} disabled={isLoading}>
      <View
        width={'100%'}
        display={'flex'}
        flexDir="row"
        justifyContent={isLoading ? 'space-between' : 'center'}
        alignItems="center"
      >
        <MyText type={type} fontSize={fontSize}>
          {text}
        </MyText>
        {isLoading && (
          <View pl={5}>
            <Spinner
              color={spinnerIconColorMap[type] as ColorValue}
              size={spinnerSize}
            />
          </View>
        )}
      </View>
    </Button>
  );
};
