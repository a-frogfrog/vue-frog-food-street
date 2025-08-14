<script setup lang="ts">
import { Icon, Mine, Order, Money, SettingIcon } from '@frog/icons';
import { useTheme } from '@frog/hooks';
import { computed, h, ref } from 'vue';

const { toggleTheme, currentTheme } = useTheme();
const actionItems = ref([
  {
    icon: () => h(Mine),
    title: '通知',
    path: '/mine/notification',
    handleClick() {
      console.log('通知');
    },
  },
  {
    icon: () => h(Order),
    title: '我的订单',
    path: '/mine/notification',
  },
  {
    icon: () => h(Money),
    title: computed(() => {
      return currentTheme.value === 'light' ? '浅色模式' : '深色模式';
    }),
    path: '/mine/notification',
    handleClick() {
      toggleTheme();
    },
  },
  {
    icon: () => h(SettingIcon),
    title: '设置',
    path: '/mine/notification',
  },
  {
    icon: () => h(Mine),
    title: '关于我们',
    path: '/mine/notification',
  },
  {
    icon: () => h(Mine),
    title: '帮助与反馈',
    path: '/mine/notification',
  },
  {
    icon: () => h(Mine),
    title: '退出登录',
    path: '/mine/notification',
  },
]);
</script>
<template>
  <article>
    <section
      @click="item.handleClick"
      v-for="item in actionItems"
      :key="item.title"
      class="flex items-center gap-4 !py-4"
    >
      <Icon :size="32">
        <Component :is="item.icon" />
      </Icon>
      <span class="font-inter text-lg font-medium">{{ item.title }}</span>
    </section>
  </article>
</template>
