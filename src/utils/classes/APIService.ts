import {$count, $ok} from '../commons';
import {Nullable} from '../commons/type';
import {Resp} from './interfaces/APIConstants';
import {APIHeaders, RequestHeaders} from './interfaces/APIInterface';
import {NGRequest} from './NGResquest';

export class APIServer extends NGRequest {
  static DEFAULT_TIMEOUT = 8000;

  public readonly authentication?: APIHeaders;
  public constructor(baseURL: string, authentication?: APIHeaders) {
    super(baseURL, {
      timeout: APIServer.DEFAULT_TIMEOUT,
    });

    this.authentication = authentication;
  }

  public async ngrequest<T = any>(
    relativeURL: string,
    method?: string,
    responseType?: string,
    statuses?: number[],
    body?: Nullable<object>,
    suplHeaders?: RequestHeaders,
    timeout?: number,
  ): Promise<T | null> {
    suplHeaders = $ok(suplHeaders)
      ? {...this.authentication, ...suplHeaders}
      : {...this.authentication};
    statuses = $count(statuses) ? statuses! : [Resp.OK];
    const resp = await this.req(
      relativeURL,
      method,
      responseType,
      body,
      suplHeaders,
      timeout,
    );

    return statuses.includes(resp.status) && $ok(resp.response)
      ? (resp.response as T)
      : null;
  }
}
