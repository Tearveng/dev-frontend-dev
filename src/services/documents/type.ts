import {Dictionary} from "@utils/commons/type";

export interface  DocumentSession{
  title: string,
  fileName: string,
  abstract: string,
  genuineFileId: number,
  url: string,
}

export interface CreateDocument {
  "user-data": Dictionary;
  abstract:    string;
  "file-name": string;
  title:       string;
  upload:      string;
}