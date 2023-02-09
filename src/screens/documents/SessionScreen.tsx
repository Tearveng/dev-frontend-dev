import {Dialog, DialogHook, useDialog} from '@src/components/commons/dailog';
import {LoadingButton} from '@src/components/commons/loading_btn';
import {MyText} from '@src/components/commons/my_text';
import {Pagination} from '@src/components/commons/pagination';
import {Layout} from '@src/components/layout';
import {API_URL} from '@src/config/env';
import {getDeadLineTimer, useTimer} from '@src/hooks';
import {useNavigation} from '@src/navigation';
import {HStack, InfoIcon, View} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import dayjs from 'dayjs';
import {SessionStatus} from '@src/utils/commons/mappingObject';
import {MyIconButton} from '@src/components/commons/my_icon_button';
export interface Session {
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
  const dialog = useDialog();

  return (
    <Layout navigation={navigation}>
      <View height={'100%'} width={'100%'} backgroundColor={'black'}>
        <Pagination
          isScroll={true}
          baseUrl={API_URL ?? 'http://10.2.50.26:8080'}
          prefixUrl="/api/v1/sessions"
          queryString={{pageSize: 10, expirationstatus: 'all'}}
          render={(item: Session) => <Body item={{...item}} dialog={dialog} />}
          header={{
            DefaultLanguage: 'fr',
            Accept: 'application/json',
            Certignarole: 1,
          }}
          position="buttom"
        />
        <Dialog
          size="full"
          headerBackgroundColor={'gray.800'}
          bodyBackgroundColor={'gray.800'}
          footerBackgroundColor={'gray.800'}
          header={
            <MyText fontSize="lg" type="white">
              Session Detail
            </MyText>
          }
          buttons={
            <View>
              <LoadingButton text={'Close'} onPress={dialog.onClose} />
            </View>
          }
          isOpen={dialog.isOpen}
          onClose={dialog.onClose}
          body={
            <HStack space={3}>
              <View>
                <MyText type="white">ID: </MyText>
                <MyText type="white">TTL: </MyText>
                <MyText type="white">Created Date: </MyText>
                <MyText type="white">Expired Date: </MyText>
              </View>
              <View>
                <MyText type="white">404 </MyText>
                <MyText type="white">2m : 20s </MyText>
                <MyText type="white">{Date.now()}</MyText>
                <MyText type="white">{`${Date.now() + 3343}`} </MyText>
              </View>
            </HStack>
          }
        />
      </View>
    </Layout>
  );
};

const Body = ({item, dialog}: {item: Session; dialog: DialogHook}) => {
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
          icon={<InfoIcon />}
          onPress={dialog.onOpen}
        />
      </View>
    </HStack>
  );
};
