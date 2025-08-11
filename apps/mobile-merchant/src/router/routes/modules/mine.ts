const mine = {
  path: 'mine',
  name: 'mine',
  component: () => import('#/views/_tabbar/mine/Index.vue'),
  meta: {
    title: '我的',
    tabBarPage: true,
    topBar: true,
  },
};

export default mine;
