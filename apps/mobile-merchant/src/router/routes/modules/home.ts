const home = {
  path: 'home',
  name: 'home',
  component: () => import('#/views/_tabbar/home/Index.vue'),
  meta: {
    title: '首页',
    tabBarPage: true,
    topBarPage: true,
  },
};

export default home;
