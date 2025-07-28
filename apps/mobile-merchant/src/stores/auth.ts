/**
 * 鉴权 store
 * @returns
 */

import { defineStore } from 'pinia';

interface loginParams {
  account: string;
  password: string;
}

export const useAuthStore = defineStore('auth', () => {
  const login = (params: loginParams) => {};

  const logout = () => {};

  return { login, logout };
});
