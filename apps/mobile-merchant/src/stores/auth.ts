/**
 * 鉴权 store
 * @returns
 */

import { defineStore } from 'pinia';
import { authApi } from '#/api';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToken } from '@frog/hooks';

interface loginParams {
  account: string;
  password: string;
}

export const useAuthStore = defineStore('auth', () => {
  const APP_TOKEN = import.meta.env.VITE_APP_TOKEN;
  const { getStoreToken, setStoreToken, removeStoreToken } =
    useToken(APP_TOKEN);
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

  const login = async (params: loginParams) => {
    const response = await authApi.login(params);
    console.log(response);
    router.push('/home');
    setToken('123');
  };

  const logout = () => {
    _removeToken();
  };

  return { login, logout, token, getToken, setToken };
});
