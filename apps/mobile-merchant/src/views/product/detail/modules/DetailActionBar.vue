<script setup lang="ts">
import { IconShoppingCart } from '@frog/icons';
</script>

<template>
  <div class="absolute bottom-0 w-full bg-white !px-3 !py-2 shadow-lg">
    <div class="flex gap-4 items-center">
      <IconShoppingCart size="30" />

      <div class="w-full">
        <button
          class="w-full !py-3 !text-xl !border-0 !text-white bg-[#4EAA33]"
        >
          添加购物车
        </button>
      </div>
    </div>
  </div>
</template>
