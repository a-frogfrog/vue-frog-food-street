/**
 * @description 请求模块
 */

import { createAxiosRequest } from '@frog/request';

export const requestClient = createAxiosRequest({
  baseURL: import.meta.env.VITE_APP_API_URL,
});
