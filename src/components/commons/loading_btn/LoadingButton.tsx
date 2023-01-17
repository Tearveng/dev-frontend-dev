import {Button, View} from 'native-base';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {MyText} from '../my_text/MyText';
import {LoadingButtonProps} from './type';

const LoadingButton = ({text, isLoading, ...props}: LoadingButtonProps) => {
  return (
    <Button {...props} disabled={isLoading}>
      <View
        width={'100%'}
        display={'flex'}
        flexDir="row"
        justifyContent={isLoading ? 'space-between' : 'center'}
        alignItems="center"
      >
        <MyText>{text}</MyText>
        {isLoading && (
          <View pl={5}>
            <ActivityIndicator animating />
          </View>
        )}
      </View>
    </Button>
  );
};

export default LoadingButton;
