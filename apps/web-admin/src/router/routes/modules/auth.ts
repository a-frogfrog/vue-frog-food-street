const auth = {
  path: '/auth',
  name: 'auth',
  meta: {
    requiresAuth: false,
    title: '认证',
  },
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('#/views/auth/login/index.vue'),
      meta: {
        requiresAuth: false,
        title: '登录',
      },
    },
  ],
};

export default auth;
