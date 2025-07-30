import axios from 'axios';
import {
  handleRequest,
  handleRequestError,
  handleResponse,
  handleResponseError,
} from './interceptors';
/**
 * @description 创建基础请求实例
 */

interface BaseRequestOptions {
  baseURL: string;
  timeout?: number;
  headers?: object;
}

export function createRequest(baseOptions: BaseRequestOptions) {
  const instance = axios.create({
    baseURL: baseOptions.baseURL,
    timeout: baseOptions.timeout,
    headers: baseOptions.headers,
  });

  instance.interceptors.request.use(handleRequest, handleRequestError);
  instance.interceptors.response.use(handleResponse, handleResponseError);

  const requestClient = {
    get: (url: string, params?: {}): any => {
      return instance.request({
        url,
        method: 'get',
        params,
      });
    },

    post(url: string, data?: {}): any {
      return instance.request({
        url,
        method: 'post',
        data,
      });
    },

    put: (url: string, data?: {}) => {
      return instance.request({
        url,
        method: 'put',
        data,
      });
    },

    delete: (url: string, data?: {}) => {
      return instance.request({
        url,
        method: 'delete',
        data,
      });
    },
  };

  return requestClient;
}
