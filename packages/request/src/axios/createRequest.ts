import axios from 'axios';

export interface RequestConfig {
  baseURL: string;
}

export function createAxiosRequest(RequestConfig: RequestConfig) {
  const request = axios.create({
    baseURL: RequestConfig.baseURL,
    timeout: 10000,
  });

  return request;
}
