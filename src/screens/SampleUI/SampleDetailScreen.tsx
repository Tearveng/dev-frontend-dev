import SvgView from '@src/components/common/SVGView';
import {Box, Text, View} from 'native-base';
import React from 'react';
import {Image, Platform} from 'react-native';
import {Training} from '@src/components/Svgs';
import TrainingWeb from '@src/assets/logo/training.svg';
import TimeIcon from '@src/assets/logo/timeIcon.png';
export const SampleDetailScreen = () => (
  <View px={2.5} height={'100%'}>
    <View width={'100%'} height={'8%'} mt={3}>
      <Text fontSize={18} color={'black'} fontWeight={'semibold'}>
        Basic What is CQRS?
      </Text>
      <Box height={3} />
      <Text color="muted.400:alpha.70">By Sokchanith ROS</Text>
    </View>
    <View
      width={'100%'}
      height={'30%'}
      backgroundColor={'blue.200'}
      borderRadius={15}
      mt={2}
    >
      {Platform.OS === 'web' ? (
        <img src={TrainingWeb} height={250} width={300} />
      ) : (
        <>
          <SvgView xml={Training} height={'100%'} width={'100%'} />
        </>
      )}
    </View>
    <View mt={5}>
      <Text fontSize={18} color={'black'} fontWeight={'semibold'}>
        Command Query Responsibility Sergregation (CQRS),{' '}
        <Text fontSize={16} color={'muted.500'} fontWeight={'normal'}>
          a pattern that separates read and update operations for a data store.
          Implementing CQRS in your application can maximize its performance,
          scalability, and security.
        </Text>
      </Text>
    </View>
    <View
      height={'20%'}
      width={'100%'}
      display="flex"
      flexDir="row"
      justifyContent="space-between"
      mt="8"
    >
      <Text fontSize={20} color={'black'} fontWeight={'bold'}>
        Course Detaikls
      </Text>
      <View>
        <Image
          source={TimeIcon}
          style={{width: 25, height: 25, tintColor: '#f97316'}}
        />
      </View>
    </View>
  </View>
);
