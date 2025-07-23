const analysis = {
  path: '/analysis',
  name: 'analysis',
  component: () => import('#/views/analysis/index.vue'),
  meta: {
    tabBarPage: true,
    title: '分析',
  },
};

export default analysis;
