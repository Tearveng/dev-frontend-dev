import {Localization} from '@src/i18n/languages';
import {Box, ChevronDownIcon, Input, SearchIcon, View} from 'native-base';
import React from 'react';
import {useTranslation} from 'react-i18next';

export const Search = () => {
  const {t} = useTranslation();
  return (
    <View
      display={'flex'}
      flexDir={'row'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <View
        height={'10'}
        display={'flex'}
        flexDir={'row'}
        bg={'muted.200'}
        width={'100%'}
        alignItems={'center'}
        justifyContent={'space-between'}
        borderRadius={10}
        px={5}
      >
        <View
          display={'flex'}
          flexDir={'row'}
          alignItems={'center'}
          // bgColor={'amber.400'}
          _web={{
            width: '95%',
          }}
          // width={'100%'}
        >
          <SearchIcon color={'warning.500'} />
          <Box width={2} />
          <Input
            // outlineStyle="none"
            focusOutlineColor={'muted.200'}
            width={'80%'}
            backgroundColor={'muted.200'}
            borderWidth={'0'}
            placeholder={t(Localization.search) ?? ''}
            color={'muted.800'}
            _web={{
              // marginLeft: 10,
              width: '90%',
            }}
          />
        </View>
        <Box height={'80%'} width={'0.1'} backgroundColor={'muted.400'} />
        <View display={'flex'} flexDir={'row'} alignItems={'center'}>
          <ChevronDownIcon />
        </View>
      </View>
    </View>
  );
};
