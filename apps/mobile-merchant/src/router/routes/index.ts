import type { RouteRecordRaw } from 'vue-router';
import home from './modules/home';
import mine from './modules/mine';
import search from './modules/search';
import order from './modules/order';
import auth from './modules/auth';
import cart from './modules/cart';
import side from './modules/side';
import product from './modules/product';
import supplier from './modules/supplier';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: () => import('#/layouts/Basic.vue'),
    children: [home, mine, search, order, cart, side, product, supplier],
    meta: {
      isAuth: true,
      title: 'root',
    },
  },
  auth,
];

export default routes;
