const dashboard = {
  path: '',
  component: () => import('#/views/dashboard/index.vue'),
  meta: {
    requiresAuth: true,
    title: 'Dashboard',
  },
};

export default dashboard;
