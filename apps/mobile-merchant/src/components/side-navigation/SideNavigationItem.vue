<script setup lang="ts">
import { Icon } from '@frog/common-ui';
import { HomeIcon } from '@frog/icons';

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
      <Icon :size="24">
        <HomeIcon />
      </Icon>
      <span class="font-inter">{{ props.title }}</span>
    </div>
  </div>
</template>
