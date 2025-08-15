<script setup lang="ts">
/**
 * @description 商品列表项
 */

import { IconStamp } from '@frog/icons';

interface Product {
  productName: string;
  img: string;
  price: number;
  isOfficial: boolean;
  sold: number;
  stock: number;
}

interface Props {
  item: Product;
  productName?: string;
  img?: string;
  price?: number;
  isOfficial?: boolean;
  sold?: number;
  stock?: number;
}

type Emits = {
  (e: 'click'): void;
};

defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <div
    @click="emit('click')"
    class="flex !mb-4 dark:bg-[#1A1A1A] dark:text-[#E9E9E9] !p-2 rounded-md"
  >
    <img class="w-24 h-24 rounded-md" :src="item.img" :alt="item.productName" />
    <div
      class="relative !ml-4 border-b dark:border-transparent border-gray-200 flex-1"
    >
      <div
        class="absolute top-0 right-0 text-gray-500 flex border border-gray-100 dark:border-gray-700 dark:shadow-md !p-1 rounded-md"
      >
        <span class="text-xs font-inter !px-1">{{
          item.isOfficial ? '官方' : '个人'
        }}</span>
      </div>

      <h1 class="text-lg font-bold">{{ item.productName }}</h1>
      <div class="flex items-center gap-2 mt-2">
        <p class="text-gray-500 font-inter">￥{{ item.price }}</p>
        <IconStamp size="14" />
      </div>
      <div class="flex gap-4 items-center !mt-2">
        <div
          class="text-gray-500 w-fit bg-gray-100 dark:bg-[#313131] dark:shadow-md rounded-lg !px-1"
        >
          <span>已售:</span>
          <span>{{ item.sold }}</span>
        </div>
        <div class="text-gray-500">
          <span>剩余:</span>
          <span>{{ item.stock }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
