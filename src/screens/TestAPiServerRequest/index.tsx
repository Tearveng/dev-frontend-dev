import {APIServer} from '@src/utils/classes/APIService';
import {Verb, RespType, Resp} from '@src/utils/classes/interfaces/APIConstants';
import {Text, Button, View} from 'native-base';
import React, {useState} from 'react';

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

export const TestAPiServerRequestScreen = () => {
  const api = new APIServer(process.env.API_URL, {
    certignahash: 'ySsPUR23',
    certignarole: 2,
    certignauser: 'pps#test',
  });

  const [dataGet, setDataGet] = useState<PingModel | null>();

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
      const data = await api.ngrequest(
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
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <View>
      <Button colorScheme="primary" onPress={getPing}>
        Test Get API
      </Button>
      <Text padding={5} color="black">
        TestAPiServerRequest
        <Text color="green.500">
          {dataGet?.requestId} {dataGet?.requestUrl}
        </Text>
      </Text>
      <br />
      <Button colorScheme="green" onPress={post}>
        Test Post API
      </Button>
      <br />
      <Button colorScheme="yellow" onPress={put}>
        Test Put API
      </Button>
      <br />
      <Button colorScheme="red" onPress={deleteApi}>
        Test Delete API
      </Button>
      <br />
      <Button colorScheme="primary" onPress={getSessions}>
        Test Get Sessions
      </Button>
      <br />
      <Button colorScheme="green" onPress={postSessions}>
        Create Session
      </Button>
    </View>
  );
};
