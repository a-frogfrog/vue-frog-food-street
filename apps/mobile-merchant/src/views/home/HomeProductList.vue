<script setup lang="ts">
/**
 * @description 商品列表
 */
</script>
<template>
  <div class="!p-4">
    <div>
      <h1 class="text-2xl font-bold mb-4 dark:text-[#E9E9E9]">商品列表</h1>
    </div>
    <div class="!pt-4">
      <slot name="items" />
    </div>
  </div>
</template>
