<script setup lang="ts">
interface Props {
  src: string;
  name: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <img
      class="min-w-16 max-h-20 min-h-16 rounded-full object-cover"
      :src="src"
      alt=""
    />
    <div class="text-center">
      <span class="font-inter text-sm">{{ name }}</span>
    </div>
  </div>
</template>
