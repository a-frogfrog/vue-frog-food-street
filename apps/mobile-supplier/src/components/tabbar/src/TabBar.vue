<script setup lang="ts">
import { computed } from 'vue';
import {
  type TabBarProps,
  type TabBarEmits,
  TAB_BAR_ITEM_SIZE,
} from './constants';
import { Icon } from '@frog/icons';

const props = defineProps<TabBarProps>();
const emit = defineEmits<TabBarEmits>();

const handleClick = (name: string) => {
  emit('change', name);
};

const isActive = (name: string) => {
  return props.active === name;
};

const getSize = computed(() => {
  return props.iconSize || TAB_BAR_ITEM_SIZE;
});
</script>

<template>
  <div
    class="tabbar-filter dark:backdrop-brightness-50 shadow-2xl dark:text-white flex justify-around items-center h-full !p-2 !px-4 !pt-3 relative"
  >
    <div
      :style="{
        backgroundColor: isActive(item.name)
          ? props.activeColor || '#E0CFFE'
          : 'transparent',
      }"
      :class="[isActive(item.name) ? 'scale-110' : '']"
      @click="handleClick(item.name)"
      v-for="item in props.items"
      :key="item.name"
      class="flex-1 z-10 h-full w-full flex justify-center !py-1.5 rounded-md duration-200 origin-bottom"
    >
      <img
        v-if="item.cover"
        :src="item.cover"
        :alt="item.label"
        :style="{ width: `${getSize}px`, height: `${getSize}px` }"
        class="rounded-full object-cover scale-125"
      />
      <Icon v-else :size="24">
        <Component ref="tabBarItemIcon" :is="item.icon" />
      </Icon>
    </div>
  </div>
</template>

<style scoped>
.tabbar-filter {
  background-image: radial-gradient(transparent 1px, #ffffff5d 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
}
</style>
