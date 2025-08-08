/**
 * 鉴权 store
 * @returns
 */

import { defineStore } from 'pinia';
import { authApi, type AuthApi } from '#/api';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToken, useLoading } from '@frog/hooks';

export const useAuthStore = defineStore('auth', () => {
  const APP_TOKEN = import.meta.env.VITE_APP_TOKEN;
  const { getStoreToken, setStoreToken, removeStoreToken } =
    useToken(APP_TOKEN);
  const { startLoading, stopLoading } = useLoading();
  const token = ref<string>(getStoreToken() || '');
  const router = useRouter();

  const setToken = (t: string) => {
    token.value = t;
    setStoreToken(t);
  };

  const getToken = () => {
    return token.value;
  };

  const _removeToken = () => {
    token.value = '';
    removeStoreToken();
  };

  const login = async (params: AuthApi.loginParams) => {
    startLoading('登录中...');
    await authApi.login(params);
    stopLoading();
    router.push('/home');
    setToken('123');
  };

  const logout = () => {
    _removeToken();
  };

  return { login, logout, token, getToken, setToken };
});
