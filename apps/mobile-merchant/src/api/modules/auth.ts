import { requestClient } from '#/api/request';

interface loginParams {
  account: string;
  password: string;
}
export const authApi = {
  login(params: loginParams) {
    return requestClient.post('/auth/login', {
      account: '19353464797',
      password: '123456',
    });
  },
};
