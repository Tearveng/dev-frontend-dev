import {Search} from '@src/components/Search';
import {
  Avatar,
  Box,
  Pressable,
  ScrollView,
  useBreakpointValue,
  View,
} from 'native-base';
import React, {useEffect} from 'react';
import {HeroSectionSampleUI, LatestCourses} from './components';
import SvgView from '@src/components/commons/SVGView';
import {Training} from '@src/components/svgs';
import TrainingWeb from '@src/assets/logo/training.svg';
import {Platform} from 'react-native';
import PlayIcon from '@src/assets/logo/play.png';
import {WorkFromHome} from '@src/components/svgs';
import {courses, lastestCourses} from './mockdata';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {setCourses} from '@src/redux/reducers/course';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorRoute} from '@src/navigation/NavigatorRouteConstant';
import {Localization} from '@src/i18n/languages';
import {MyText} from '@src/components/commons/my_text/MyText';
import {Layout} from '@src/components/layout';

const LandingScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();
  const dispatch = useDispatch();
  const {t} = useTranslation();
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

  useEffect(() => {
    dispatch(setCourses(courses));
  }, []);
  return (
    <Layout navigation={navigation}>
      <View p={4}>
        <View
          display={'flex'}
          flexDir={'row'}
          justifyContent={'space-between'}
          p={4}
        >
          <View>
            <MyText color={'muted.500'} fontSize={'md'}>
              {`${t(Localization.hello)},`}
            </MyText>
            <Box height={5} />
            <MyText color={'muted.900'} fontSize={'xl'} fontWeight={'bold'}>
              Sharkiri
            </MyText>
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
        </View>
        <Box height={5} />
        <MyText color={'muted.900'} fontSize={'lg'} fontWeight={'semibold'}>
          {t(Localization.lastSeenCourses)}
        </MyText>
        <Box height={5} />
        <ScrollView height={'2/6'} width={'100%'}>
          <View
            display={'flex'}
            flexDir={flexDir}
            flexWrap="wrap"
            justifyContent="space-between"
            width={'100%'}
          >
            {lastestCourses.map(data => (
              <Pressable
                _web={lastestCoursesBreakPoint}
                key={data.id}
                onPress={() =>
                  navigation.navigate(
                    NavigatorRoute.SAMPLE_UI.SAMPLE_DETAIL_SCREEN,
                    {
                      params: {id: data.id},
                    },
                  )
                }
              >
                <LatestCourses
                  duration={data.duration}
                  title={data.title}
                  mb="3"
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
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default LandingScreen;
