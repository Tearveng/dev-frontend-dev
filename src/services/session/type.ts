import {Dictionary} from '@utils/commons/type';

export interface DetailForDownloadFile {
  url: string;
  date: Date;
  expires: Date;
}

export interface ForceToCloseSessionBody {
  'manifest-data': object;
  reason: string;
  force: boolean;
}

export interface ExtendSessionBody {
  ttl: number;
}

export interface GenerateOtpBody {
  actor: string;
  length: number;
  numeric: boolean;
  ttl: number;
  tag: string;
}

export interface CheckOtpBody {
  actor: string;
  otp: string;
  tag: string;
  delete: boolean;
}

export interface ApproveDocumentBody {
  'manifest-data': Dictionary;
  actor: string;
  otp: string;
  tag: string;
}

export interface SignDocumentBody {
  'manifest-data': Dictionary;
  certificate: string;
  actor: string;
  otp: string;
  tag: string;
}
