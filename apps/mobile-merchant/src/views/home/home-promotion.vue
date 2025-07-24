<script setup lang="ts">
/**
 * @description: 首页-热门活动
 */

import { MoreIcon } from '@frog/icons';
import { Icon } from '@frog/common-ui';
import { FrostedPicture, ScrollHorizontally } from '#/components';

function useFrostedPicture() {
  const promotionItems = [
    {
      src: '/imgs/background/welcome.webp',
      title: '🤣 ScrollHorizontally',
    },
    {
      src: '/imgs/background/hot.webp',
      title: '😎 ScrollHorizontally',
    },
    {
      src: '/imgs/background/welcome.webp',
      title: '😍 ScrollHorizontally',
    },
    {
      src: '/imgs/background/hot.webp',
      title: '✨ ScrollHorizontally',
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
      <h1 class="text-2xl font-bold mb-4">HOT 热门活动</h1>
      <Icon :size="14">
        <MoreIcon />
      </Icon>
    </div>
    <ScrollHorizontally>
      <template #content>
        <div class="flex gap-4 !px-4">
          <FrostedPicture
            :src="item.src"
            :title="item.title"
            :alt="item.title"
            v-for="item in promotionItems"
          ></FrostedPicture>
        </div>
      </template>
    </ScrollHorizontally>
  </div>
</template>
