const cart = {
  path: 'cart',
  name: 'Cart',
  component: () => import('#/views/cart/Index.vue'),
  meta: {
    title: '购物车',
  },
};

export default cart;
