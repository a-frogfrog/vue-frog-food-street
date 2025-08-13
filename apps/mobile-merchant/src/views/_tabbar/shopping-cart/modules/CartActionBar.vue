<script setup lang="ts">
import { useShoppingCart, useOld } from '../data';
import { CountTo } from 'vue3-count-to';

const { totalPrice, handleCheckout } = useShoppingCart();
const { old } = useOld(totalPrice);
</script>

<template>
  <div class="bg-white shadow !py-3 !px-4">
    <div class="flex justify-end">
      <div
        @click="handleCheckout"
        class="bg-[#4EAA33] justify-center items-center flex w-full !px-2 rounded-md !py-2 !text-white"
      >
        <div class="text-center text-xl flex-1">
          <span>确认</span>
        </div>
        <div class="bg-[#3a8124] !px-2 !py-2 rounded-md">
          <CountTo
            prefix="￥"
            :decimals="2"
            :start-val="old"
            :duration="500"
            :end-val="totalPrice"
            class="font-smiley tracking-wider"
          />
        </div>
      </div>
    </div>
  </div>
</template>
