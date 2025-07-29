import axios from 'axios';

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

  const requestClient = {
    get: (url: string, params?: {}) => {
      return instance.request({
        url,
        method: 'get',
        params,
      });
    },

    post: (url: string, data?: {}) => {
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
