<script setup lang="ts">
/**
 * @description 页面组件
 */
</script>

<template>
  <div role="page" class="relative h-screen dark:bg-[#000000] bg-[#f5f5f5]">
    <div role="topNavigation">
      <slot name="topNavigation"></slot>
    </div>
    <div role="sideNavigation" class="absolute">
      <slot name="sideNavigation"></slot>
    </div>
    <div
      role="main"
      class="h-full overflow-y-auto !pb-[50px]"
      style="scrollbar-width: none"
    >
      <slot name="main"></slot>
    </div>
    <div role="shoppingCart">
      <slot name="shoppingCart"></slot>
    </div>
    <div role="tabBar" class="absolute !bottom-0 min-h-[50px] w-full">
      <slot name="tabBar"></slot>
    </div>
  </div>
</template>

<style>
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
