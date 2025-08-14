<script setup lang="ts">
/**
 * @description 页面组件
 */

import { computed } from 'vue';
import {
  type PageProps,
  DEFAULT_TOP_BAR_HEIGHT,
  DEFAULT_TAB_BAR_HEIGHT,
} from './constants';

const {
  topBarHeight = DEFAULT_TOP_BAR_HEIGHT,
  tabBarHeight = DEFAULT_TAB_BAR_HEIGHT,
  isTabBar,
  isTopBar,
} = defineProps<PageProps>();

const cssVars = computed(() => {
  return {
    '--page-main-height': '100%',
    '--page-top-bar-height': `${topBarHeight}px`,
    '--page-tab-bar-height': `${tabBarHeight}px`,
  };
});

function useClasses() {
  const mainClasses = computed(() => {
    const classNames = [];
    if (isTabBar && isTopBar) {
      classNames.push(
        'h-[calc(var(--page-main-height)-var(--page-top-bar-height)-var(--page-tab-bar-height))]',
      );
    }

    if (isTabBar) {
      classNames.push(
        'h-[calc(var(--page-main-height)-var(--page-tab-bar-height))]',
      );
    }

    if (isTopBar) {
      classNames.push(
        'h-[calc(var(--page-main-height)-var(--page-top-bar-height))]',
      );
    }

    return classNames;
  });
  const tabBarClasses = computed(() => {
    return {
      [`h-[var(--page-tab-bar-height)]`]: isTabBar,
    };
  });

  return { mainClasses, tabBarClasses };
}

const { mainClasses, tabBarClasses } = useClasses();
</script>

<template>
  <div :style="cssVars" role="page" class="page-component">
    <nav role="topNavigation" v-if="isTopBar">
      <slot name="topNavigation"></slot>
    </nav>
    <aside role="sideNavigation">
      <slot name="sideNavigation"></slot>
    </aside>
    <main
      :class="mainClasses"
      role="main"
      class="page-main"
      style="scrollbar-width: none"
    >
      <slot name="main"></slot>
    </main>
    <div role="shoppingCart">
      <slot name="shoppingCart"></slot>
    </div>
    <div role="tabBar" :class="tabBarClasses" class="tabbar" v-if="isTabBar">
      <slot name="tabBar"></slot>
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
