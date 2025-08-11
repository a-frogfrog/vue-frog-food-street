const supplier = {
  name: 'supplier',
  path: 'supplier',
  redirect: () => {
    return { name: 'merchantHome' };
  },
  children: [
    {
      name: 'supplierHome',
      path: 'home/:id',
      component: () => import('#/views/supplier/home/Index.vue'),
    },
    {
      name: 'supplierList',
      path: 'list',
      component: () => import('#/views/supplier/list/Index.vue'),
    },
  ],
};

export default supplier;
