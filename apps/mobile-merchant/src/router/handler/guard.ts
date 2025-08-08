import type { NavigationGuardWithThis, NavigationHookAfter } from 'vue-router';
import { useAuthStore } from '#/stores';

export const beforeEach: NavigationGuardWithThis<undefined> = (to: any) => {
  document.title = getTitle(to.meta.title);
  if (!to.meta.isAuth) {
    return true;
  }
  const _auth = useAuthStore();
  if (!_auth.getToken()) {
    return '/auth/login';
  }
  return true;
};

export const afterEach: NavigationHookAfter = (): void => {};

const getTitle = (title: string) => {
  return `${title} - ${import.meta.env.VITE_APP_NAME}`;
};
