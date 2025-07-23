import { RouteRecordRaw } from 'vue-router';
import home from './modules/home';
import mine from './modules/mine';
import search from './modules/search';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: () => import('#/layouts/basic.vue'),
    children: [home, mine, search],
  },
];

export default routes;
