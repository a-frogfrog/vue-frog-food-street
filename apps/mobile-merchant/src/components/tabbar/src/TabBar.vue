<script setup lang="ts">
import type { TabBarProps } from './types';
import { Icon } from '@frog/icons';

const props = defineProps<TabBarProps>();
function useTabBar() {
  const getSize = () => {
    return props.size || 24;
  };

  return {
    getSize,
  };
}
const { getSize } = useTabBar();
</script>

<template>
  <div
    class="tabbar-filter dark:backdrop-brightness-50 dark:text-white !px-2 !pt-2 flex justify-around items-center !py-4"
  >
    <template v-for="item in props.items">
      <div v-if="typeof item.icon === 'string'">
        <Icon>
          <i :class="item.icon" :style="{ fontSize: getSize() }"></i>
        </Icon>
      </div>
      <div v-else>
        <Icon :size="getSize()">
          <Component :is="item.icon" />
        </Icon>
      </div>
    </template>
  </div>
</template>

<style scoped>
.tabbar-filter {
  background-image: radial-gradient(transparent 1px, #ffffff5d 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
}
</style>
