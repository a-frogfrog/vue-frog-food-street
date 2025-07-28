const mine = {
  path: 'mine',
  name: 'mine',
  component: () => import('#/views/mine/Index.vue'),
  meta: {
    title: '我的',
    tabBarPage: true,
    topBar: true,
  },
};

export default mine;
