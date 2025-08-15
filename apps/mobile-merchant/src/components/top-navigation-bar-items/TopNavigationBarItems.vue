<script setup lang="ts">
import { IconSetting, IconBar, IconShoppingCart } from '@frog/icons';
import { h } from 'vue';

type Emits = {
  (e: 'barClick'): void;
  (e: 'cartClick'): void;
  (e: 'settingClick'): void;
};
const emit = defineEmits<Emits>();

const iconProps = {
  size: 28,
  color: '#000',
};

const topNavigationBarItems = [
  {
    icon: () => h(IconShoppingCart, iconProps),
    onClick: () => emit('cartClick'),
  },
  {
    icon: () => h(IconBar, iconProps),
    onClick: () => emit('barClick'),
  },
  {
    icon: () => h(IconSetting, iconProps),
    onClick: () => emit('settingClick'),
  },
];
</script>
<template>
  <div class="flex gap-4">
    <div v-for="item in topNavigationBarItems" @click="item.onClick">
      <Component :is="item.icon" />
    </div>
  </div>
</template>
