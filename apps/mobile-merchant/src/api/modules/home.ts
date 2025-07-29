import { requestClient } from '#/api/request';

export function getData() {
  return requestClient.post('/auth/login', { account: '', password: '' });
}
