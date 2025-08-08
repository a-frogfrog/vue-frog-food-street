<script setup lang="ts">
/**
 * @description 页面组件
 */
</script>

<template>
  <div
    role="page"
    class="relative h-screen dark:bg-[#000000] bg-[#f5f5f5]"
    style="scrollbar-width: none"
  >
    <div role="sideNavigation">
      <slot name="sideNavigation"></slot>
    </div>
    <div role="main" class="h-full overflow-x-hidden overflow-y-auto">
      <slot name="main">
        <RouterView v-slot="{ Component }">
          <Transition name="slide-fade" mode="out-in">
            <Component :is="Component"></Component>
          </Transition>
        </RouterView>
      </slot>
    </div>
    <div role="shoppingCart">
      <slot name="shoppingCart"></slot>
    </div>
    <div role="tabBar" class="absolute bottom-0 w-full">
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
