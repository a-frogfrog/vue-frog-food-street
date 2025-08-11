const cart = {
  path: 'cart',
  name: 'cart',
  component: () => import('#/views/_tabbar/cart/Index.vue'),
  meta: {
    title: '购物车',
    tabBarPage: true,
  },
};

export default cart;
