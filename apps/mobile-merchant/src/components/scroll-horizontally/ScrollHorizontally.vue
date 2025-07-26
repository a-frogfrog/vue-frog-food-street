<script setup lang="ts">
/**
 * @description 水平滚动
 */
</script>

<template>
  <div class="relative">
    <div class="overflow-x-auto pb-2" style="scrollbar-width: none">
      <slot name="content" />
    </div>
  </div>
</template>
