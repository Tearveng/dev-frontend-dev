import {AxiosProgressEvent} from 'axios';
import {AcceptedLanguages, UserRole} from './APIConstants';

export interface APIHeaders {
  defaultlanguage?: AcceptedLanguages;
  certignarole: UserRole;
  certignahash: string;
  certignauser: string;
}
export declare const NO_BODY: undefined;
export declare const NO_HEADERS: {};
export type RequestHeaders = {
  [key: string]: string | string[] | number;
};
export interface TSResponse {
  status: number;
  response: Buffer | object | string | ReadableStream | null;
  headers: RequestHeaders;
}
export interface TSRequestOptions {
  headers?: RequestHeaders;
  timeout?: number;
  managesCredentials?: boolean;
}

export type ResponseType =
  | 'buffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream';

export interface OtherCommonAxiosEvent {
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
  onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void;
  beforeRedirect?: (
    options: Record<string, any>,
    responseDetails: {headers: Record<string, string>},
  ) => void;
}
