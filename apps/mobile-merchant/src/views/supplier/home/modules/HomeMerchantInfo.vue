<script setup lang="ts">
import { ScrollHorizontally } from '#/components';
import PromotionTag from '../components/Tag.vue';
import { useMerchantHomeData } from '../data';

const { merchantInfo } = useMerchantHomeData();
</script>

<template>
  <div class="relative !px-4 !mt-2">
    <div class="bg-white z-20 rounded-md !p-2">
      <div class="flex justify-end">
        <div class="flex-1">
          <h1 class="text-2xl">{{ merchantInfo.name }}</h1>
          <div class="flex items-center gap-2 text-gray-500">
            <span class="text-orange-500 text-sm font-semibold"
              >评分{{ merchantInfo.rating }}</span
            >
            <span class="text-xs rounded-md !px-1 border-gray-200 border">{{
              merchantInfo.isDirect ? '直营' : '非直营'
            }}</span>
          </div>
          <p class="text-sm text-gray-500">
            {{ merchantInfo.description }}
          </p>
        </div>
        <div>
          <img
            class="h-18 w-18 rounded-md"
            :src="merchantInfo.avatar"
            :alt="`${merchantInfo.name} Avatar`"
          />
        </div>
      </div>
      <div class="!mt-4">
        <ScrollHorizontally>
          <template #content>
            <div class="flex">
              <h2>活动商品:</h2>
              <PromotionTag
                v-for="item in merchantInfo.promotion"
                :key="item.id"
                :title="item.title"
              />
            </div>
          </template>
        </ScrollHorizontally>
      </div>
    </div>
  </div>
</template>
