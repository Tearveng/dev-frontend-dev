import axios, {AxiosInstance} from 'axios';

export class APIService {
  private readonly axiosInstance: AxiosInstance;
  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    });
  }

  async get<T>(url: string, headers = {}): Promise<T | null> {
    try {
      const {data} = await this.axiosInstance.get<T>(url, {
        headers,
      });
      return data;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  async post<T>(url: string, data?: any, headers?: {}): Promise<T | null> {
    try {
      const {data: res} = await this.axiosInstance.post<T>(url, data, {
        headers,
      });
      return res;
    } catch (error: any) {
      console.error(error);
      return error;
    }
  }

  async put<T>(url: string, data?: any, headers?: {}): Promise<T | null> {
    try {
      const {data: res} = await this.axiosInstance.put<T>(url, data, {
        headers,
      });
      return res;
    } catch (error: any) {
      console.error(error);
      return error;
    }
  }

  async patch<T>(url: string, data?: any, headers?: {}): Promise<T | null> {
    try {
      const {data: res} = await this.axiosInstance.patch<T>(url, data, {
        headers,
      });
      return res;
    } catch (error: any) {
      console.error(error);
      return error;
    }
  }

  async delete<T>(url: string, headers?: {}): Promise<T | null> {
    try {
      const {data: res} = await this.axiosInstance.delete<T>(url, {headers});
      return res;
    } catch (error: any) {
      console.error(error);
      return error;
    }
  }
}
