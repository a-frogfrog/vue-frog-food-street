<script setup lang="ts">
import { IconMore } from '@frog/icons';
import type { CartSupplierItem } from '../data';
interface Props {
  item: CartSupplierItem;
}

const { item } = defineProps<Props>();
</script>

<template>
  <div class="flex z-10 bg-white justify-end items-center">
    <div class="flex flex-1 gap-2 !py-2">
      <img class="h-12 w-12 rounded-md" :src="item.photo" :alt="item.name" />
      <div>
        <h3 class="font-medium">{{ item.name }}</h3>
        <span class="text-sm font-medium font-smiley !pr-1">{{
          item.score
        }}</span>
        <span class="text-sm">({{ item.commentNumber }})</span>
      </div>
    </div>
    <div>
      <IconMore size="20" />
    </div>
  </div>
</template>
