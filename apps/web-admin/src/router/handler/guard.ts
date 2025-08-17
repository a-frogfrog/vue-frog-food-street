import type { NavigationGuardWithThis, NavigationHookAfter } from 'vue-router';
import { $e } from '@frog/events';
import { useAuthStore } from '#/stores';

const getTitle = (title: string) => {
  return `${title} - ${import.meta.env.VITE_APP_TITLE}`;
};

const beforeEach: NavigationGuardWithThis<undefined> = (to: any) => {
  $e.emit('progress:start');

  document.title = getTitle(to.meta.title);

  const authStore = useAuthStore();
  if (to.meta.requiresAuth) {
    if (!authStore.isAuthenticated) {
      return { path: '/auth/login' };
    }
  }

  return true;
};

const afterEach: NavigationHookAfter = (): void => {
  $e.emit('progress:finish');
};

export default {
  beforeEach,
  afterEach,
};
