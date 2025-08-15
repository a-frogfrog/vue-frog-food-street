<script setup lang="ts">
import { computed } from 'vue';
import type { IconProps } from './constants';

const props = defineProps<IconProps>();

const getStyles = computed(() => {
  return {
    height: `${props.size}px`,
    width: `${props.size}px`,
    color: props.color,
  };
});
</script>

<template>
  <i :style="getStyles">
    <slot></slot>
  </i>
</template>
