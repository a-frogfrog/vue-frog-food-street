import type { PermissionListApi, PermissionMenuApi } from '#/types';
import { requestClient } from '#/api/request';

export function getPermissionList(): Promise<PermissionListApi> {
  return requestClient.post('/Permission/GetPermissionList');
}

export function getPermissionMenu(): Promise<PermissionMenuApi> {
  return requestClient.post('/Permission/GetUserPermissionMenuList');
}
