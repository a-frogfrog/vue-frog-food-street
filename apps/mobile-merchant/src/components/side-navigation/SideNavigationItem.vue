<script setup lang="ts">
import { IconHome } from '@frog/icons';

interface Props {
  title: string;
}

type emit = {
  (e: 'click'): void;
};

const props = defineProps<Props>();
const emit = defineEmits<emit>();
</script>
<template>
  <div class="mt-4 !py-2">
    <div @click="emit('click')" class="flex items-center gap-3">
      <IconHome size="24" />
      <span class="font-inter">{{ props.title }}</span>
    </div>
  </div>
</template>
