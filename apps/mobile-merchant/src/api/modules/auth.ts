import { requestClient } from '#/api/request';

export namespace AuthApi {
  export interface loginParams {
    account: string;
    password: string;
  }

  export interface loginResponse {
    token: string;
  }
}

export const authApi = {
  login(params: AuthApi.loginParams) {
    return requestClient.post('/auth/login', params);
  },
};
