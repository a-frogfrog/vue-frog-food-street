const order = {
  path: 'order',
  name: 'order',
  component: () => import('#/views/_tabbar/order/list/Index.vue'),
  meta: {
    title: '订单管理',
    tabBarPage: true,
    topBarPage: true,
  },
  children: [
    {
      name: 'orderList',
      path: 'list',
      component: () => import('#/views/_tabbar/order/list/Index.vue'),
    },
    {
      name: 'orderDetail',
      path: 'detail',
      component: () => import('#/views/_tabbar/order/detail/Index.vue'),
    },
  ],
};

export default order;
