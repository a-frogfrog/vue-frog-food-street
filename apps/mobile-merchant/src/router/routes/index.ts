import { RouteRecordRaw } from 'vue-router';
import home from './modules/home';
import mine from './modules/mine';
import search from './modules/search';
import order from './modules/order';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: () => import('#/layouts/basic.vue'),
    children: [home, mine, search, order],
  },
];

export default routes;
