const auth = {
  path: 'auth',
  name: 'Auth',
  children: [
    {
      path: 'login',
      name: 'Login',
      component: () => import('#/views/auth/login/Index.vue'),
    },
  ],
};
export default auth;
