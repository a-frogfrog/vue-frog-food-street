import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { HomeIcon } from '@frog/icons';

export function useTabBar() {
  const route = useRoute();
  const active = ref(route.name?.toString());
  const tabBarPage = ref<boolean>(route.meta?.tabBarPage as boolean);

  const items = [
    {
      name: 'home',
      icon: HomeIcon,
      label: '首页',
    },
    {
      name: 'order',
      icon: 'iconfont icon-_shiyongcishu',
      label: '订单',
    },
    {
      name: 'cart',
      icon: 'iconfont icon-gouwuche',
      label: '购物车',
    },
    {
      name: 'mine',
      icon: 'iconfont icon-wode',
      label: '我的',
      cover:
        'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    },
  ];

  function handleClick(name: string) {
    active.value = name;
  }

  return {
    active,
    items,
    handleClick,
    tabBarPage,
  };
}
