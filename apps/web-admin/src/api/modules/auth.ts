import { createAxiosRequest } from '@frog/request';
import type { LoginRequest, LoginResponseApi, ApiResponse } from '#/types';

export function login(data: LoginRequest): Promise<LoginResponseApi> {
  return createAxiosRequest({
    url: '/auth/login',
    method: 'post',
    data,
  });
}

export function checkLogin(): Promise<ApiResponse> {
  return createAxiosRequest({
    url: '/auth/checkLogin',
    method: 'get',
  });
}
