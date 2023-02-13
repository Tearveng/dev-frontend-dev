import {
  APIHeaders,
  RequestHeaders,
} from '@utils/classes/interfaces/APIInterface';
import {APIServer} from '@utils/classes/APIService';
import {Resp, Verb} from '@utils/classes/interfaces/APIConstants';
import {API_VERSION} from '@src/config/env';
import {CreateSessionBody, QueryString} from '.';

export class SessionsService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  public async getSessions<T>(
    queryString: QueryString,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const url = this.urlFormat(queryString);
    const data = await this.ngrequest<T>(
      url,
      Verb.Get,
      'json',
      [Resp.OK],
      undefined,
      {
        DefaultLanguage: 'fr',
        Accept: 'application/json',
        Certignarole: 2,
        ...header,
      },
      timeOut,
    );
    return !data ? undefined : (data as T);
  }

  public async createSession<T>(
    body: CreateSessionBody,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const data = await this.ngrequest<T>(
      `/api/v${API_VERSION}/sessions`,
      Verb.Post,
      'json',
      [Resp.Created],
      body,
      {
        DefaultLanguage: 'fr',
        Accept: 'application/json',
        Certignarole: 2,
        ...header,
      },
      timeOut,
    );
    return !data ? undefined : (data as T);
  }

  private urlFormat(queryString: QueryString) {
    let stringQueries = '';
    let index = 0;
    for (let key in queryString) {
      index++;
      stringQueries += `${index > 1 ? '&' : ''}${key}=${queryString[key]}`;
    }
    return `/api/v${API_VERSION}/sessions?${stringQueries}`;
  }
}
