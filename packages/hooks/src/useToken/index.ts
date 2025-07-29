/**
 * @description token管理
 */
import Cookies from 'js-cookie';

export function useToken(key?: string) {
  const TOKEN_KEY = key || '___TOKEN_KEY___';
  const setStoreToken = (token: string) => {
    Cookies.set(TOKEN_KEY, token);
  };
  const getStoreToken = () => {
    return Cookies.get(TOKEN_KEY);
  };

  const removeStoreToken = () => {
    Cookies.remove(TOKEN_KEY);
  };

  return {
    setStoreToken,
    getStoreToken,
    removeStoreToken,
  };
}
