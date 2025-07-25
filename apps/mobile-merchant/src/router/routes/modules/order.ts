const order = {
  path: 'order',
  name: 'order',
  component: () => import('#/views/order/Index.vue'),
  meta: {
    title: '订单管理',
  },
};

export default order;
