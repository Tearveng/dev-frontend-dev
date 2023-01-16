import React, {useState} from 'react';
import {API_URL} from '@src/config/env';
import {APIServer} from '@src/utils/classes/APIService';
import {Verb, RespType, Resp} from '@src/utils/classes/interfaces/APIConstants';
import {
  Text,
  Button,
  Divider,
  Box,
  useBreakpointValue,
  VStack,
  Heading,
  ScrollView,
} from 'native-base';
import {Platform, View} from 'react-native';
// import SvgView from './SVGLogo';
import {Brainstorming} from '@src/components/svgs';
import BrainstormingWeb from '@src/assets/logo/brainstorming.svg';
import SvgView from '../../components/commons/SVGView';

export interface PingModel {
  requestId: string;
  apiRole: number;
  user: string;
  role: number;
  requestMethod: string;
  requestUrl: string;
  date: Date;
  ip: string;
  params?: Params;
  headers?: Headers;
  query?: Params;
}

export interface Headers {
  host: string;
  connection: string;
  accept: string;
  'user-agent': string;
  'sec-gpc': string;
  'accept-language': string;
  'sec-fetch-site': string;
  'sec-fetch-mode': string;
  'sec-fetch-dest': string;
  referer: string;
  'accept-encoding': string;
  defaultlanguage: string;
  certignarole: number;
  certignahash: string;
  certignauser: string;
}

export interface Params {}

export interface Session {
  sessions: string[];
}

// Converts JSON strings to/from your types
export class Convert {
  public static toSession(json: string): Session {
    return JSON.parse(json);
  }

  public static sessionToJson(value: Session): string {
    return JSON.stringify(value);
  }
}

export const TestAPiServerRequestScreen = () => {
  console.log('API_URL => ', API_URL);
  const api = new APIServer(API_URL || 'http://127.0.0.1:8080', {
    certignahash: 'ySsPUR23',
    certignarole: 2,
    certignauser: 'pps#test',
  });

  const [dataGet, setDataGet] = useState<PingModel | null>();
  const [session, setSession] = useState<Session | null>();

  const post = async () => {
    try {
      const url = `/api/v1/dev/sign-document?file-name=hello&format=1&level=1&type1=1&certificate=generate`;
      const data = await api.ngrequest(url, Verb.Post, RespType.Json);
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const postSessions = async () => {
    try {
      const url = `/api/v1/sessions`;
      const data = await api.ngrequest(
        url,
        Verb.Post,
        RespType.Json,
        [Resp.Created],
        {
          ttl: 900,
        },
      );
      getSessions();
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const put = async () => {
    try {
      const body = {
        'manifest-data': {},
        reason: 'string',
        force: true,
      };
      const url = `/api/v1/session/2/close`;
      const data = await api.ngrequest(
        url,
        Verb.Put,
        RespType.Json,
        [Resp.OK, Resp.Created],
        body,
      );
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const deleteApi = async () => {
    try {
      const url = `/api/v1/session/2/scenario/1`;
      const data = await api.ngrequest(url, Verb.Delete, RespType.Json, [
        Resp.OK,
        Resp.Forbidden,
      ]);
      console.log(data);
    } catch (error: any) {}
  };

  const getPing = async () => {
    try {
      const data = await api.ngrequest(
        '/api/v1/dev/ping',
        Verb.Get,
        RespType.Json,
        [Resp.OK, Resp.TimeOut],
      );
      setDataGet(data);
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getSessions = async () => {
    try {
      const data = await api.ngrequest<Session>(
        '/api/v1/sessions',
        Verb.Get,
        RespType.Json,
        [Resp.OK],
        undefined,
        {
          certignarole: 1,
        },
      );
      console.log(data);
      setSession(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Box safeArea px={3}>
      <ScrollView h="100%">
        <ScrollView horizontal={true} nestedScrollEnabled={true} style={{}}>
          {Platform.OS === 'web' ? (
            <>
              <img src={BrainstormingWeb} height={250} width={200} />
              <img src={BrainstormingWeb} height={250} width={200} />
              <img src={BrainstormingWeb} height={250} width={200} />
              <img src={BrainstormingWeb} height={250} width={200} />
              <img src={BrainstormingWeb} height={250} width={200} />
            </>
          ) : (
            <>
              <SvgView xml={Brainstorming} height={200} width={150} />
              <SvgView xml={Brainstorming} height={200} width={150} />
              <SvgView xml={Brainstorming} height={200} width={150} />
              <SvgView xml={Brainstorming} height={200} width={150} />
              <SvgView xml={Brainstorming} height={200} width={150} />
              <SvgView xml={Brainstorming} height={200} width={150} />
              <SvgView xml={Brainstorming} height={200} width={150} />
            </>
          )}
        </ScrollView>
        <Button colorScheme="primary" onPress={getPing}>
          Test Get API
        </Button>
        <Text padding={5} color="black">
          TestAPiServerRequest
          <Text color="green.500">
            {dataGet?.requestId} {dataGet?.requestUrl}
          </Text>
        </Text>
        <Divider height={5} bg={'white:alpha.0'} />
        <Button colorScheme="green" onPress={post}>
          Test Post API
        </Button>
        <Divider height={5} bg={'white:alpha.0'} />
        <Button colorScheme="yellow" onPress={put}>
          Test Put API
        </Button>
        <Divider height={5} bg={'white:alpha.0'} />
        <Button colorScheme="red" onPress={deleteApi}>
          Test Delete API
        </Button>
        <Divider height={5} bg={'white:alpha.0'} />
        <Button colorScheme="primary" onPress={getSessions}>
          Test Get Sessions
        </Button>
        <Box h={300}>
          <ScrollView p={5} h={300} nestedScrollEnabled={true}>
            {session?.sessions.map((_session, index) => (
              <Box key={index} py={1}>
                <Text color={'black'}>{_session}</Text>
              </Box>
            ))}
          </ScrollView>
          {/* {session && session.sessions?.length > 0 && (
          <FlatList
            data={session?.sessions}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => item}
          />
        )} */}
        </Box>
        <Divider height={5} bg={'white:alpha.0'} />
        <Button colorScheme="green" onPress={postSessions}>
          Create Session
        </Button>
        <Example />
      </ScrollView>
    </Box>
  );
};
// const renderItem = (item: string) => (
//   <Box py={1}>
//     <Text color={'black'}>{item}</Text>
//   </Box>
// );

const Example = () => {
  const flexDir = useBreakpointValue({
    base: 'column',
    md: 'row',
    lg: 'row',
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack py="8" space={8} alignItems="center" justifyContent="center">
        <Heading>Why us?</Heading>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: flexDir,
          }}
        >
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.500"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* <Icon
              as={Foundation}
              name="shield"
              size="sm"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            /> */}
            <Text
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            >
              Secure Checkout
            </Text>
          </VStack>
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.500"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* <Icon
              as={Foundation}
              name="shield"
              size="sm"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            /> */}
            <Text
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            >
              Secure Checkout
            </Text>
          </VStack>
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.500"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* <Icon
              as={Foundation}
              name="shield"
              size="sm"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            /> */}
            <Text
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            >
              Secure Checkout
            </Text>
          </VStack>
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.500"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* <Icon
              as={Foundation}
              name="shield"
              size="sm"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            /> */}
            <Text
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            >
              Secure Checkout
            </Text>
          </VStack>
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.500"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* <Icon
              as={Foundation}
              name="shield"
              size="sm"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            /> */}
            <Text
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            >
              Secure Checkout
            </Text>
          </VStack>
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.500"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* <Icon
              as={Foundation}
              name="shield"
              size="sm"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            /> */}
            <Text
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            >
              Secure Checkout
            </Text>
          </VStack>
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.500"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* <Icon
              as={Feather}
              name="clock"
              size="sm"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            /> */}
            <Text
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            >
              Fast Turn Around
            </Text>
          </VStack>
        </View>
      </VStack>
    </ScrollView>
  );
};
