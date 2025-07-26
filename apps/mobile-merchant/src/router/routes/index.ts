import { RouteRecordRaw } from 'vue-router';
import home from './modules/home';
import mine from './modules/mine';
import search from './modules/search';
import order from './modules/order';
import auth from './modules/auth';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: () => import('#/layouts/Basic.vue'),
    children: [home, mine, search, order, auth],
  },
];

export default routes;
