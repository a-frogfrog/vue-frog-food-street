const auth = {
  path: 'auth',
  name: 'Auth',
  children: [
    {
      path: 'login',
      name: 'Login',
      component: () => import('#/views/auth/login/Index.vue'),
      meta: {
        title: '登录',
      },
    },
  ],
};
export default auth;
