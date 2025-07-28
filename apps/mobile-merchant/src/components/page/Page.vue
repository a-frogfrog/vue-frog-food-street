<script setup lang="ts">
/**
 * @description 页面组件
 */
</script>

<template>
  <div
    class="h-screen overflow-x-hidden overflow-y-auto"
    style="scrollbar-width: none"
  >
    <div>
      <slot name="topNavigationBar"></slot>
    </div>
    <div class="!pb-10">
      <slot name="main">
        <RouterView v-slot="{ Component }">
          <Transition name="slide-fade" mode="out-in">
            <Component :is="Component"></Component>
          </Transition>
        </RouterView>
      </slot>
    </div>
    <div>
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
