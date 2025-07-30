<script setup lang="ts">
/**
 * @name Avatar
 * @description 头像组件
 */

interface Props {
  src: string;
  name: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <img
      class="max-h-20 max-w-20 min-w-16 min-h-16 rounded-full object-cover border-transparent"
      :src="src"
      alt=""
    />
    <div class="text-center max-w-20 truncate">
      <span class="font-inter text-sm dark:text-[#E9E9E9]">{{ name }}</span>
    </div>
  </div>
</template>
