declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string;
      SERVER_CLIENT_PORT: string;
    }
  }
}
export {};
