const home = {
  path: 'home',
  name: 'home',
  component: () => import('#/views/home/Index.vue'),
  meta: {
    title: '首页',
  },
};

export default home;
