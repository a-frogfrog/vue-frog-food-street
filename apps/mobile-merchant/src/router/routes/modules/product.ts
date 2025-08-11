const product = {
  name: 'product',
  path: 'product',
  children: [
    {
      name: 'detail',
      path: 'detail/:id',
      component: () => import('#/views/product/detail/Index.vue'),
    },
    {
      name: 'settlement',
      path: 'settlement',
      component: () => import('#/views/product/settlement/Index.vue'),
    },
  ],
};

export default product;
