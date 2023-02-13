import {Dictionary} from '@src/utils/commons/type';

export type QueryString = Partial<{
  [key: string]: string | number | number[] | string[];
}> &
  SessionQueryString;

export interface SessionQueryString {
  ttlmin?: number;
  ttlmax?: number;
  dynttlmin?: number;
  dynttlmax?: number;
  userids?: number[];
  page?: number;
  pageSize?: number;
  expirationstatus?: 'all' | 'expired' | 'valid';
  status_mask?: string;
}

export interface CreateSessionBody {
  'user-data': Dictionary;
  ttl: number;
}
