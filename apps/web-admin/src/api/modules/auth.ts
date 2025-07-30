import { requestClient } from '#/api/request';
import type { LoginRequest, LoginResponseApi, ApiResponse } from '#/types';

export function login(data: LoginRequest): Promise<LoginResponseApi> {
  return requestClient.post('/auth/login', data);
}

export function checkLogin(): Promise<ApiResponse> {
  return requestClient.get('/auth/checkLogin');
}
