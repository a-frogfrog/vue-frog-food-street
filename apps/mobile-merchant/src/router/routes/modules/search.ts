const search = {
  path: '/search',
  name: 'search',
  component: () => import('#/views/search/index.vue'),
  meta: {
    title: '搜索',
    icon: 'search',
  },
};

export default search;
