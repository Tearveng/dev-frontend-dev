export interface Page<T> {
  results: T[];
  total: number;
}

export interface Header{
  DefaultLanguage: string,
  Accept: string,
  Certignarole: number,
}