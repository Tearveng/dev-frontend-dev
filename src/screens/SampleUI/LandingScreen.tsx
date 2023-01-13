import {Search} from '@src/components/Search';
import {
  Avatar,
  Box,
  ScrollView,
  Text,
  useBreakpointValue,
  View,
} from 'native-base';
import React from 'react';
import {HeroSectionSampleUI, LatestCourses} from './Components';
import SvgView from '@src/components/common/SVGView';
import {Training} from '@src/components/Svgs';
import TrainingWeb from '@src/assets/logo/training.svg';
import {Platform} from 'react-native';
import PlayIcon from '@src/assets/logo/play.png';
import {WorkFromHome} from '@src/components/Svgs';
import {lastestCourses} from './mockdata';

const LandingScreen = () => {
  const flexDir = useBreakpointValue({
    base: 'column',
    md: 'row',
  });
  const lastestCoursesBreakPoint = useBreakpointValue({
    base: {width: '100%'},
    sm: {width: '100%'},
    md: {width: '48%'},
    lg: {width: '32%'},
  });
  return (
    <View p={4}>
      <View
        display={'flex'}
        flexDir={'row'}
        justifyContent={'space-between'}
        p={4}
      >
        <View>
          <Text color={'muted.500'} fontSize={18}>
            Hello,
          </Text>
          <Box height={5} />
          <Text color={'muted.900'} fontSize={24} fontWeight={'bold'}>
            Sharkiri
          </Text>
        </View>
        <View
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'30%'}
        >
          <Avatar
            width={70}
            height={70}
            source={PlayIcon}
            backgroundColor="white"
          />
        </View>
      </View>
      {/* <Box /> */}
      <Search />
      <Box height={4} />
      <View
        display="flex"
        flexDir={flexDir}
        flexWrap={'wrap'}
        justifyContent="space-between"
      >
        <HeroSectionSampleUI>
          {Platform.OS === 'web' ? (
            <img src={TrainingWeb} height={250} width={300} />
          ) : (
            <>
              <SvgView xml={Training} height={'100%'} width={'100%'} />
            </>
          )}
        </HeroSectionSampleUI>
        {/* {Platform.OS === 'web' && (
          <>
            <HeroSectionSampleUI width={'50%'}>
              {Platform.OS === 'web' ? (
                <img src={TrainingWeb} height={250} width={300} />
              ) : (
                <>
                  <SvgView xml={Training} height={'100%'} width={'100%'} />
                </>
              )}
            </HeroSectionSampleUI>
            <HeroSectionSampleUI width={'50%'}>
              {Platform.OS === 'web' ? (
                <img src={TrainingWeb} height={250} width={300} />
              ) : (
                <>
                  <SvgView xml={Training} height={'100%'} width={'100%'} />
                </>
              )}
            </HeroSectionSampleUI>
          </>
        )} */}
      </View>
      <Box height={5} />
      <Text color={'muted.900'} fontSize={20} fontWeight={'semibold'}>
        Last Seen Courses
      </Text>
      <Box height={5} />
      <ScrollView height={'2/6'}>
        <View
          display={'flex'}
          flexDir={flexDir}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {lastestCourses.map(data => (
            <LatestCourses
              duration={data.duration}
              title={data.title}
              key={data.id}
              mb="3"
              _web={lastestCoursesBreakPoint}
            >
              {Platform.OS === 'web' ? (
                <img src={data.leftImage.web} height={80} width={80} />
              ) : (
                <SvgView
                  xml={data.leftImage.mobile ?? WorkFromHome}
                  width={80}
                  height={80}
                />
              )}
            </LatestCourses>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default LandingScreen;
