import {Button, View} from 'native-base';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {LoadingButtonProps} from '.';
import {MyText} from '../my_text';

export const LoadingButton = ({
  text,
  isLoading,
  fontSize,
  type = 'white',
  indecatorColor = 'white',
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
            <ActivityIndicator animating color={indecatorColor} />
          </View>
        )}
      </View>
    </Button>
  );
};
