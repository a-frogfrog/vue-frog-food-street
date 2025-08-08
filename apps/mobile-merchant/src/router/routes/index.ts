import type { RouteRecordRaw } from 'vue-router';
import home from './modules/home';
import mine from './modules/mine';
import search from './modules/search';
import order from './modules/order';
import auth from './modules/auth';
import cart from './modules/cart';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: () => import('#/layouts/Basic.vue'),
    children: [home, mine, search, order, cart],
    meta: {
      isAuth: true,
    },
  },
  auth,
];

export default routes;
