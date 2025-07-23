import { RouteRecordRaw } from 'vue-router';
import home from './modules/home';
import mine from './modules/mine';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: () => import('#/layouts/basic.vue'),
    children: [home, mine],
  },
];

export default routes;
