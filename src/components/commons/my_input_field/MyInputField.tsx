// import {Localization} from '@src/i18n/languages';
import {Input, View} from 'native-base';
import React from 'react';
import {MyInputFieldProps} from '.';

export const MyInputField = ({
  value,
  onBlur,
  onChangeText,
  _webContainer,
  ...props
}: MyInputFieldProps) => {
  return (
    <View
      _web={{
        width: '95%',
        ..._webContainer,
      }}
    >
      <Input
        height={'100%'}
        _web={{
          _focus: {
            outlineStyle: 'none',
            borderColor: '',
          },
          _hover: {
            borderColor: '',
            outlineStyle: 'none',
          },
        }}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        color="black"
        {...props}
      />
    </View>
  );
};
