const system = {
  path: 'system',
  name: 'system',
  meta: {
    title: '系统管理',
  },
  children: [
    {
      path: 'dictionary',
      name: 'Dictionary',
      component: () => import('#/views/system/dictionary/index.vue'),
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'status',
      name: 'Status',
      component: () => import('#/views/system/status/index.vue'),
      meta: {
        title: '状态管理',
      },
    },
    {
      path: 'icon',
      name: 'Icon',
      component: () => import('#/views/system/icon/index.vue'),
      meta: {
        title: '图标管理',
      },
    },
    {
      path: 'permission',
      name: 'Permission',
      component: () => import('#/views/system/permission/list/index.vue'),
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'permission/list',
      name: 'PermissionList',
      component: () => import('#/views/system/permission/list/index.vue'),
      meta: {
        title: '权限列表',
      },
    },
    {
      path: 'permission/authorize',
      name: 'PermissionAuthorize',
      component: () => import('#/views/system/permission/authorize/index.vue'),
      meta: {
        title: '权限授权',
      },
    },
    {
      name: 'loginLog',
      path: 'log/login',
      component: () => import('#/views/system/log/login/index.vue'),
      meta: {
        title: '登录日志',
      },
    },
    {
      name: 'operationLog',
      path: 'log/operation',
      component: () => import('#/views/system/log/operation/index.vue'),
      meta: {
        title: '操作日志',
      },
    },
    {
      name: 'errorLog',
      path: 'log/error',
      component: () => import('#/views/system/log/error/index.vue'),
      meta: {
        title: '错误日志',
      },
    },
  ],
};

export default system;
