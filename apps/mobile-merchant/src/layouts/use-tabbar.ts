import type { TabBarProps } from '@frog/common-ui';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

export function useTabBar() {
  const activeName = ref('/');
  const route = useRoute();
  const isTabBar = ref(route.meta.tabBarPage);
  watchEffect(() => {
    isTabBar.value = route.meta.tabBarPage;
  });

  const item: TabBarProps = {
    items: [
      {
        name: '/',
        icon: 'iconfont icon-shouye-zhihui',
        label: '首页',
      },
      {
        name: 'analysis',
        icon: 'iconfont icon-_shiyongcishu',
        label: '分析',
      },
      {
        name: 'product',
        icon: 'iconfont icon-shangpin',
        label: '商品',
      },
      {
        name: 'mine',
        icon: 'iconfont icon-wode',
        label: '我的',
        cover:
          'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
      },
    ],
  };

  function handleClick(name: string) {
    activeName.value = name;
  }

  return {
    activeName,
    item,
    handleClick,
    isTabBar,
  };
}
