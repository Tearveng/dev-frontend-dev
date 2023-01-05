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
