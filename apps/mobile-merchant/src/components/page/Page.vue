<script setup lang="ts">
/**
 * @description 页面组件
 */
</script>

<template>
  <div class="h-screen overflow-auto" style="scrollbar-width: none">
    <div>
      <slot name="topNavigationBar"></slot>
    </div>
    <div class="!pb-10">
      <slot name="main">
        <RouterView />
      </slot>
    </div>
    <div>
      <slot name="tabBar"></slot>
    </div>
  </div>
</template>
