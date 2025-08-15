import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { IconHome, IconShoppingCart, IconMine, IconOrder } from '@frog/icons';

export function useTabBar() {
  const route = useRoute();
  const router = useRouter();
  const active = ref('');
  const tabBarPage = ref(false);

  watchEffect(() => {
    active.value = route.fullPath?.toString() || '';
    tabBarPage.value = route.meta?.tabBarPage as boolean;
  });

  const items = [
    {
      name: '/home',
      icon: IconHome,
      label: '首页',
    },
    {
      name: '/order',
      icon: IconOrder,
      label: '订单',
    },
    {
      name: '/cart',
      icon: IconShoppingCart,
      label: '购物车',
    },
    {
      name: '/mine',
      icon: IconMine,
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

export function useTopNavigation() {
  const router = useRouter();
  const route = useRoute();
  const topBarPage = ref(false);

  watchEffect(() => {
    topBarPage.value = route.meta?.topBarPage as boolean;
  });

  const handleBarClick = () => {
    router.push('/side');
    console.log('bar');
  };

  const handleCartClick = () => {
    console.log('cart');
  };

  const handleSettingClick = () => {
    console.log('setting');
  };

  return {
    topBarPage,
    handleBarClick,
    handleCartClick,
    handleSettingClick,
  };
}
