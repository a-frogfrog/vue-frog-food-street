<script setup lang="ts">
import { Icon, MonsterIcon } from '@frog/icons';

interface Props {
  title: string;
  icon?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="flex text-sm items-center gap-1 !mx-1 border !px-1 rounded-md border-gray-300"
  >
    <Icon :size="14" class="text-orange-500">
      <MonsterIcon />
    </Icon>
    <span>{{ props.title }}</span>
  </div>
</template>
