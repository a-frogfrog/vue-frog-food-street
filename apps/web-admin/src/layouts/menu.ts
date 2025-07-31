import { useMenuStore } from '#/stores';
import { h } from 'vue';

const menuStore = useMenuStore();

export function useMenuData() {
  const menuData = [
    {
      key: '/',
      title: '仪表盘',
      label: '仪表盘',
      disabled: false,
      icon: renderIcon('icon-shouye-zhihui'),
    },
    {
      key: '/product',
      title: '商品管理',
      label: '商品管理',
      disabled: false,
      icon: renderIcon('icon-shangpin'),
      children: [
        {
          key: '/product/list',
          title: '商品列表',
          label: '商品列表',
          disabled: false,
          icon: renderIcon(''),
        },
        {
          key: '/product/add',
          title: '商品新增',
          label: '商品新增',
          disabled: false,
          icon: renderIcon(''),
        },
        {
          key: '/product/category',
          title: '商品类别',
          label: '商品类别',
          disabled: false,
          icon: renderIcon(''),
        },
      ],
    },
    {
      key: '/order',
      title: '订单管理',
      label: '订单管理',
      disabled: false,
      icon: renderIcon('icon-shouye3'),
      children: [
        {
          key: '/order/list',
          title: '订单列表',
          label: '订单列表',
          disabled: false,
          icon: renderIcon(''),
        },
      ],
    },
    {
      key: '/merchant',
      title: '商家管理',
      label: '商家管理',
      disabled: false,
      icon: renderIcon('icon-shouye3'),
    },
    {
      key: '/supplier',
      title: '供应商管理',
      label: '供应商管理',
      disabled: false,
      icon: renderIcon('icon-shouye3'),
    },
    {
      key: '/promotion',
      title: '促销管理',
      label: '促销管理',
      disabled: false,
      icon: renderIcon(''),
      children: [
        {
          key: '/promotion/list',
          title: '促销列表',
          label: '促销列表',
          disabled: false,
          icon: renderIcon(''),
        },
        {
          key: '/promotion/add',
          title: '促销新增',
          label: '促销新增',
          disabled: false,
          icon: renderIcon(''),
        },
      ],
    },
    {
      key: '/system',
      title: '系统管理',
      label: '系统管理',
      disabled: false,
      icon: renderIcon('icon-xitong'),
      children: [
        {
          key: '/system/permission',
          title: '权限管理',
          label: '权限管理',
          disabled: false,
          icon: renderIcon('icon-quanxian1'),
          children: [
            {
              key: '/system/permission/list',
              title: '权限列表',
              label: '权限列表',
              disabled: false,
              icon: renderIcon(''),
            },
            {
              key: '/system/permission/authorize',
              title: '权限授权',
              label: '权限授权',
              disabled: false,
              icon: renderIcon(''),
            },
          ],
        },
        {
          key: '/system/dictionary',
          title: '字典管理',
          label: '字典管理',
          disabled: false,
          icon: renderIcon('icon-shujuzidian'),
          children: [
            {
              key: '/system/dictionary/list',
              title: '字典列表',
              label: '字典列表',
              disabled: false,
              icon: renderIcon(''),
            },
          ],
        },
        {
          key: '/system/icon',
          title: '图标管理',
          label: '图标管理',
          disabled: false,
          icon: renderIcon('icon-baoqian'),
        },
        {
          key: '/system/log',
          title: '日志管理',
          label: '日志管理',
          disabled: false,
          icon: renderIcon('icon-rizhi'),
          children: [
            {
              key: '/system/log/login',
              title: '登录日志',
              label: '登录日志',
              disabled: false,
              icon: renderIcon(''),
            },
            {
              key: '/system/log/error',
              title: '错误日志',
              label: '错误日志',
              disabled: false,
              icon: renderIcon(''),
            },
            {
              key: '/system/log/operation',
              title: '操作日志',
              label: '操作日志',
              disabled: false,
              icon: renderIcon(''),
            },
          ],
        },
        {
          key: '/system/status',
          title: '状态管理',
          label: '状态管理',
          disabled: false,
          icon: renderIcon(''),
        },
      ],
    },
  ];

  return {
    menuData,
    clearMenuList: menuStore.clearMenuList,
  };
}

const renderIcon = (icon: string) => {
  return () => h('i', { class: `iconfont ${icon}` });
};
