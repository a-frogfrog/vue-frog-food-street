const product = {
  path: '/product',
  name: 'product',
  component: () => import('#/views/product/index.vue'),
  meta: {
    tabBarPage: true,
    title: '产品',
  },
};

export default product;
