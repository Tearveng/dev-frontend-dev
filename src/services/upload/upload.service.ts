import {APIServer} from '@src/utils/classes/APIService';
import {Resp, Verb} from '@src/utils/classes/interfaces/APIConstants';
import {APIHeaders} from '@src/utils/classes/interfaces/APIInterface';
import {UploadPage} from '.';

export class UploadService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  async getUploadList(page: 0 | number, pageSize: number): Promise<UploadPage> {
    const data = this.ngrequest(
      `/v1/uploads?page=${page}&pageSize=${pageSize}`,
      Verb.Get,
      'json',
      [Resp.OK],
    );
    console.log(data);
    return data;
  }
}
