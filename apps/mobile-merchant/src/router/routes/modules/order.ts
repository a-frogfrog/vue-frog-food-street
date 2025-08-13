const order = {
  path: 'order',
  name: 'order',
  redirect: () => {
    return { name: 'orderList' };
  },
  meta: {
    title: '订单管理',
    tabBarPage: true,
    topBarPage: true,
  },
  children: [
    {
      name: 'orderList',
      path: 'list',
      alias: '',
      component: () => import('#/views/_tabbar/order/list/Index.vue'),
    },
    {
      name: 'orderDetail',
      path: 'detail',
      component: () => import('#/views/_tabbar/order/detail/Index.vue'),
    },
    {
      name: 'orderCheckout',
      path: 'checkout',
      component: () => import('#/views/_tabbar/order/checkout/Index.vue'),
      meta: {
        title: '结账',
        tabBarPage: false,
        topBarPage: true,
      },
    },
  ],
};

export default order;
