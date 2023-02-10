import {MyText} from '@src/components/commons/my_text';
import {Pagination} from '@src/components/commons/pagination';
import {Layout} from '@src/components/layout';
import {API_URL} from '@src/config/env';
import {getDeadLineTimer, useTimer} from '@src/hooks';
import {NavigatorRoute, useNavigation} from '@src/navigation';
import {ArrowForwardIcon, HStack, View} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import dayjs from 'dayjs';
import {SessionStatus} from '@src/utils/commons/mappingObject';
import {MyIconButton} from '@src/components/commons/my_icon_button';
import {StackNavigationProp} from "@react-navigation/stack";
import {ParamListBase} from "@react-navigation/native";
export interface Session {
  id: number;
  createdAt: Date;
  expiresAt: Date;
  publicId: number;
  status: keyof typeof SessionStatus;
  ttl: number;
  updatedAt: Date;
  url: string;
}

export const SessionScreen = () => {
  const navigation = useNavigation();

  return (
    <Layout navigation={navigation}>
      <View height={'100%'} width={'100%'} backgroundColor={'black'}>
        <Pagination
          isScroll={true}
          baseUrl={API_URL ?? 'http://10.2.50.26:8080'}
          prefixUrl="/api/v1/sessions"
          queryString={{pageSize: 10, expirationstatus: 'all'}}
          render={(item: Session) => <Body item={item} navigation={navigation} />}
          header={{
            DefaultLanguage: 'fr',
            Accept: 'application/json',
            Certignarole: 1,
          }}
          position="bottom"
        />
      </View>
    </Layout>
  );
};

const Body = ({item, navigation}: {item: Session; navigation: StackNavigationProp<ParamListBase, string, undefined>}) => {
  const [timer, setTimer] = useState('00:00:00');
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const {isTimeOut, clearTimer, total} = useTimer(setTimer, intervalRef);
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const expiredAt = dayjs(item.expiresAt);
    const secDiff = Math.ceil(expiredAt.diff(dayjs()) / 1000);
    const endTime = getDeadLineTimer({seconds: secDiff});
    clearTimer(endTime, timer);
  }, []);

  return (
      <HStack
          width={'100%'}
          background={'gray.800'}
          p={3}
          my={2}
          borderRadius={10}
          backgroundColor={isTimeOut || total === 0 ? 'red.500' : undefined}
      >
        <HStack width={'85%'} space={2}>
          <View>
            <MyText type="white">URL :</MyText>
            <MyText type="white">Expire In :</MyText>
            <MyText type="white">Status :</MyText>
          </View>
          <View>
            <MyText type="white">{item.url}</MyText>
            <MyText type="white">{timer}</MyText>
            <MyText type="white">{`${SessionStatus[item.status]}`}</MyText>
          </View>
        </HStack>
        <View display="flex" justifyContent={'center'}>
          <MyIconButton
              colorScheme="dark"
              size="md"
              icon={<ArrowForwardIcon/>}
              onPress={() => {
                navigation.navigate(NavigatorRoute.SESSION.MAIN, {
                  screen: NavigatorRoute.SESSION.DOCUMENT_IN_PROGRESS_SCREEN,
                  initial: false,
                  params: {id: item.id},
                })
              }}
          />
        </View>
      </HStack>
  );
};
