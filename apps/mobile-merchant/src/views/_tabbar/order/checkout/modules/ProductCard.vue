<script setup lang="ts">
import { ScrollHorizontally } from '#/components';
import { Icon, MoreIcon } from '@frog/icons';
import { useCheckout } from '../data';

const { productList } = useCheckout();
</script>

<template>
  <article>
    <div class="rounded-md !px-2 bg-white">
      <h2 class="text-lg font-medium !py-1">商品</h2>
      <div class="flex !p-2">
        <ScrollHorizontally class="w-[80%]">
          <template #content>
            <div class="flex gap-2 relative">
              <div v-for="item in productList" :key="item.id">
                <img
                  class="max-h-20 max-w-20 rounded-md"
                  :src="item.photo"
                  alt=""
                />
                <div class="absolute bottom-0 !px-2 rounded-md bg-yellow-200">
                  <span class="text-xs">x{{ item.number }}</span>
                </div>
              </div>
            </div>
          </template>
        </ScrollHorizontally>
        <div class="flex-1">
          <div class="flex h-full justify-center items-center">
            <p>共{{ productList.length }}件</p>
            <Icon :size="20">
              <MoreIcon />
            </Icon>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
