const shoppingCart = {
  path: 'cart',
  name: 'cart',
  component: () => import('#/views/_tabbar/shopping-cart/Index.vue'),
  meta: {
    title: '购物车',
    tabBarPage: true,
    topBarPage: true,
  },
};

export default shoppingCart;
