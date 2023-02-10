import {APIServer} from '@src/utils/classes/APIService';
import {Resp, Verb} from '@src/utils/classes/interfaces/APIConstants';
import {APIHeaders} from '@src/utils/classes/interfaces/APIInterface';
import {DocumentSession} from ".";
import {DetailForDownloadFile} from "@src/services/upload/type";
import {encode} from "@src/utils/base64_arraybuffer";


export class UploadService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  public async getDocumentSessions(id: number): Promise<DocumentSession[]> {
    const data =  await this.ngrequest<DocumentSession[]>(
      `api/v1/session/${id}/documents`,
      Verb.Get,
      'json',
      [Resp.OK],
      undefined,
      {
        DefaultLanguage: 'fr',
        Accept: 'application/json',
        Certignarole: 2
      }
    );
    return !data ? [] : data
  }

  public async getDetailDocumentSession(url: string): Promise<DetailForDownloadFile | null> {
    return await this.ngrequest<DetailForDownloadFile>(
      url,
      Verb.Get,
      'json',
      [Resp.Created],
      undefined,
      {
        DefaultLanguage: 'fr',
        Accept: 'application/json',
        Certignarole: 2
      }
    );
  }

  public async getContentDocumentSession(url: string) {
    const buffer = await this.ngrequest(
      url,
      Verb.Get,
      'arraybuffer',
      [Resp.OK],
      undefined,
      {
        DefaultLanguage: 'fr',
        Accept: 'application/json',
        Certignarole: 2
      }
    );
    return encode(buffer);
  }
}
