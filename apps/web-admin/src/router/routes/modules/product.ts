const product = {
  path: '/product',
  name: 'product',
  meta: {
    title: '商品管理',
    requiresAuth: false,
  },
  children: [
    {
      path: 'list',
      name: 'productList',
      component: () => import('#/views/product/list/index.vue'),
      meta: {
        title: '商品列表',
      },
    },
    {
      path: 'category',
      name: 'productCategory',
      component: () => import('#/views/product/category/index.vue'),
      meta: {
        title: '商品分类',
      },
    },
    {
      path: 'add',
      name: 'productAdd',
      component: () => import('#/views/product/add/index.vue'),
      meta: {
        title: '添加商品',
      },
    },
  ],
};

export default product;
