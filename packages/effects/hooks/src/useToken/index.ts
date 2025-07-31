/**
 * @description token管理
 */
import Cookies from 'js-cookie';

/**
 *  @description token管理
 * @param key 存储tokenKey | 默认为___TOKEN_KEY___
 * @returns 操作函数
 */
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
