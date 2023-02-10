import {Page} from '../type';

export type UploadPage = Page<string[]>;

export interface  DocumentSession{
  title: string,
  fileName: string,
  abstract: string,
  genuineFileId: number,
  url: string,
}

export interface DetailForDownloadFile {
  url:     string;
  date:    Date;
  expires: Date;
}