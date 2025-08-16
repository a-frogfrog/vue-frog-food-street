import type { RouteRecordRaw } from 'vue-router';
import order from './modules/order';
import analysis from './modules/analysis';
import product from './modules/product';
import mine from './modules/mine';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/order',
    component: () => import('#/layouts/Basic.vue'),
    children: [
      order, // 订单
      analysis, // 分析
      product, // 产品
      mine, // 我的
    ],
  },
];

export default routes;
