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

export interface DetailForDownloadFile {
  url:     string;
  date:    Date;
  expires: Date;
}
export interface ForceToCloseSessionBody{
  "manifest-data": object,
  "reason": string,
  "force": boolean
}