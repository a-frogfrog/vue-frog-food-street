<script setup lang="ts">
interface Props {
  src: string;
  alt?: string;
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div class="relative">
    <img class="h-30 min-w-72 object-cover rounded-md" :src :alt />
    <div
      class="absolute bottom-0 text-white left-0 w-full !p-2 rounded-b-md backdrop-blur-[4px] bg-black/[.3]"
    >
      <span class="font-semibold">{{ title }} </span>
    </div>
  </div>
</template>
