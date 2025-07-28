import { NavigationGuardWithThis, NavigationHookAfter } from 'vue-router';
import { APP_MERCHANT } from '@frog/constants';

export const beforeEach: NavigationGuardWithThis<undefined> = (to: any) => {
  document.title = getTitle(to.meta.title);
};

export const afterEach: NavigationHookAfter = (): void => {};

const getTitle = (title: string) => {
  return `${title} - ${APP_MERCHANT.NAME}`;
};
