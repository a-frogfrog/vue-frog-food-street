import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { IconHome, IconMine, IconOrder } from '@frog/icons';

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
      name: '/order',
      icon: IconOrder,
      label: '订单',
    },
    {
      name: '/analysis',
      icon: IconHome,
      label: '分析',
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
