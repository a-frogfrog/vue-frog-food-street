import axios from 'axios';

interface BaseRequestOptions {
  baseURL: string;
  timeout?: number;
  headers?: object;
}

interface RequestOptions {
  url: string;
  method: string;
  data?: object;
  params?: object;
}

export function createRequest(baseOptions: BaseRequestOptions) {
  const instance = axios.create({
    baseURL: baseOptions.baseURL,
    timeout: baseOptions.timeout,
    headers: baseOptions.headers,
  });
  return function (options: RequestOptions) {
    return instance.request(options);
  };
}
