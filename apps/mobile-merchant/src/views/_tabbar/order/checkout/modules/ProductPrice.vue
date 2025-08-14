<script setup lang="ts">
import { Icon, Money } from '@frog/icons';

const priceItems = [
  {
    label: '商品金额',
    value: '￥3002.33',
  },
  {
    label: '配送费',
    value: '￥3',
  },
  {
    label: '小计',
    value: '￥3002.33',
  },
];
</script>
<template>
  <article class="bg-white rounded-md">
    <div class="!p-2" v-for="item in priceItems" :key="item.label">
      <div class="flex justify-between">
        <h2 class="text-lg font-medium !py-1 gap-1 flex items-center">
          <Icon :size="20">
            <Money />
          </Icon>
          <span> {{ item.label }}</span>
        </h2>
        <h2 class="font-medium text-xl">{{ item.value }}</h2>
      </div>
    </div>
  </article>
</template>
