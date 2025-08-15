<script setup lang="ts">
/**
 * @description: 首页-热门活动
 */

import { IconMore } from '@frog/icons';
import { FrostedPicture, ScrollHorizontally } from '#/components';

function useFrostedPicture() {
  const promotionItems = [
    {
      src: '/imgs/promotions/promotion_2.png',
      title: '🧊 清凉季 冰淇淋化冻必退',
    },
    {
      src: '/imgs/promotions/promotion_1.png',
      title: '😎 新疆水果节 新疆法兰西西梅11.9元',
    },
    {
      src: '/imgs/background/welcome.webp',
      title: '😍 清凉一夏',
    },
  ];

  return {
    promotionItems,
  };
}

const { promotionItems } = useFrostedPicture();
</script>

<template>
  <div>
    <div class="!p-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold mb-4 dark:text-white">HOT 热门活动</h1>
      <IconMore size="14" />
    </div>
    <ScrollHorizontally>
      <template #content>
        <div class="flex gap-4 !px-4">
          <FrostedPicture
            v-for="item in promotionItems"
            :src="item.src"
            :title="item.title"
            :alt="item.title"
          />
        </div>
      </template>
    </ScrollHorizontally>
  </div>
</template>
