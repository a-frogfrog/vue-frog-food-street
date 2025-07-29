import { createRequest } from '../request';

const request = createRequest({
  baseURL: 'https://api.fsm.frogfrog.cn/api/admin',
});

export function getData() {
  return request({
    url: '/Auth/Login',
    method: 'post',
    data: {
      username: 'admin',
      password: '123456',
    },
  });
}
