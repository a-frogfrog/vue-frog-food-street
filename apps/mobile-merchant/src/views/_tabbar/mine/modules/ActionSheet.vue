<script setup lang="ts">
import {
  IconMine,
  IconSetting,
  IconDarkOutlined,
  IconLightOutlined,
} from '@frog/icons';
import { useTheme } from '@frog/hooks';
import { computed, h, ref } from 'vue';

const { toggleTheme, currentTheme } = useTheme();

function useActionSheet() {
  const iconProps = {
    size: 32,
    color: '#999999',
  };

  const themeConfig = {
    dark: {
      icon: IconDarkOutlined,
      title: '切换到浅色模式',
    },
    light: {
      icon: IconLightOutlined,
      title: '切换到深色模式',
    },
  };

  const actionItems = ref([
    {
      icon: h(IconMine, iconProps),
      title: '通知',
      path: '/mine/notification',
      handleClick() {
        console.log('通知');
      },
    },
    {
      icon: h(IconMine, iconProps),
      title: '我的订单',
      path: '/mine/notification',
    },
    {
      icon: computed(() => {
        return h(themeConfig[currentTheme.value].icon, iconProps);
      }),
      title: computed(() => {
        return themeConfig[currentTheme.value].title;
      }),
      path: '/mine/notification',
      handleClick() {
        toggleTheme();
      },
    },
    {
      icon: h(IconSetting, iconProps),
      title: '设置',
      path: '/mine/notification',
    },
    {
      icon: h(IconMine, iconProps),
      title: '关于我们',
      path: '/mine/notification',
    },
    {
      icon: h(IconMine, iconProps),
      title: '帮助与反馈',
      path: '/mine/notification',
    },
    {
      icon: h(IconMine, iconProps),
      title: '退出登录',
      path: '/mine/notification',
    },
  ]);

  return {
    actionItems,
  };
}

const { actionItems } = useActionSheet();
</script>
<template>
  <article>
    <section
      @click="item.handleClick"
      v-for="item in actionItems"
      :key="item.title"
      class="flex items-center gap-4 !py-4"
    >
      <Component :is="item.icon" />
      <span class="font-inter text-lg font-medium">{{ item.title }}</span>
    </section>
  </article>
</template>
