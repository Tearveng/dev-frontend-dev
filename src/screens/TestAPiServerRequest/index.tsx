import {APIService} from '@src/utils/classes/APIService';
import axios, {AxiosError} from 'axios';
import {View, Text, Button} from 'native-base';
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
  const api = new APIService('http://127.0.0.1:8080');
  const [dataGet, setDataGet] = useState<PingModel | null>();
  const [errorGet, setErrorGet] = useState<AxiosError | null>();
  const getPing = async () => {
    const _data = await api.get<PingModel>('/api/v1/dev/ping');
    if (axios.isAxiosError(_data)) {
      // const error = _data as AxiosError;
      setErrorGet(_data);
    }
    setDataGet(_data);
  };

  const post = async () => {
    const url = `/api/v1/dev/sign-document?file-name=hello&format=1&level=1&type1=1&certificate=generate`;
    const data = await api.post(url);
    console.log(data);
  };

  const put = async () => {
    const body = {
      'manifest-data': {},
      reason: 'string',
      force: true,
    };
    const url = `/api/v1/session/2/close`;
    const data = await api.put(url, body);
    console.log(data);
  };

  const deleteApi = async () => {
    const url = `/api/v1/session/2/scenario/1`;
    const data = await api.delete(url);
    console.log(data);
  };

  if (errorGet)
    return (
      <View>
        <Text>{errorGet.message}</Text>
      </View>
    );
  return (
    <View>
      <Button colorScheme="primary" onPress={getPing}>
        Test Get API
      </Button>
      <Text padding={5} color="black">
        TestAPiServerRequest{' '}
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
      {/* <Button colorScheme="yellow" onPress={post}>
        Test Patch API
      </Button> */}
    </View>
  );
};
