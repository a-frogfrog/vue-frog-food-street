const order = {
  path: 'order',
  name: 'order',
  component: () => import('#/views/_tabbar/order/Index.vue'),
  meta: {
    title: '订单管理',
    tabBarPage: true,
    topBarPage: true,
  },
};

export default order;
