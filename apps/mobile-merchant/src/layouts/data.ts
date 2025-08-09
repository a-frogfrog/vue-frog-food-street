import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { HomeIcon, ShoppingCart, Mine, Order } from '@frog/icons';

export function useTabBar() {
  const route = useRoute();
  const router = useRouter();
  const active = ref('');
  const tabBarPage = ref(false);

  watchEffect(() => {
    active.value = route.name?.toString() || '';
    tabBarPage.value = route.meta?.tabBarPage as boolean;
  });

  const items = [
    {
      name: 'home',
      icon: HomeIcon,
      label: '首页',
    },
    {
      name: 'order',
      icon: Order,
      label: '订单',
    },
    {
      name: 'cart',
      icon: ShoppingCart,
      label: '购物车',
    },
    {
      name: 'mine',
      icon: Mine,
      label: '我的',
      cover:
        'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    },
  ];

  const handleChange = (name: string) => {
    active.value = name;
    router.push(name);
  };

  return {
    active,
    items,
    handleChange,
    tabBarPage,
  };
}
