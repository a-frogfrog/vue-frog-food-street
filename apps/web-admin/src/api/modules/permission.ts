import type { PermissionListApi, PermissionMenuApi } from '#/types';
import { createAxiosRequest } from '@frog/request';

export function getPermissionList(): Promise<PermissionListApi> {
  return createAxiosRequest({
    url: '/Permission/GetPermissionList',
    method: 'get',
    params: {},
  });
}

export function getPermissionMenu(): Promise<PermissionMenuApi> {
  return createAxiosRequest({
    url: '/Permission/GetUserPermissionMenuList',
    method: 'get',
    params: {},
  });
}
