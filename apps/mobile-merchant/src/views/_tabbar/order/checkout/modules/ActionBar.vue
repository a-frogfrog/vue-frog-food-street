<script setup lang="ts">
import { CountTo } from 'vue3-count-to';
import { useCheckout } from '../data';

const { totalPrice } = useCheckout();
</script>
<template>
  <div class="absolute left-0 bottom-2 w-full">
    <div class="bg-[#FFFFFF] shadow !p-2 flex justify-end items-center gap-2">
      <div>
        <span class="!mx-2">待支付:</span>
        <strong class="text-lg text-[#FF2528]">
          <CountTo
            prefix="￥"
            :duration="500"
            :decimals="2"
            :end-val="parseInt(totalPrice)"
          ></CountTo>
        </strong>
      </div>
      <button
        class="!rounded-full font-medium !px-4 !py-3 !text-white bg-linear-to-r from-[#FF5324] to-[#FF2528]"
      >
        立即支付
      </button>
    </div>
  </div>
</template>
