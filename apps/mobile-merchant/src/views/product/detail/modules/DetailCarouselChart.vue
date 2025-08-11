<script setup lang="ts">
import { Swipe, SwipeItem } from 'vant';
</script>

<template>
  <Swipe class="h-80" indicator-color="white" indicator-active-color="#f60">
    <SwipeItem v-for="item in 4" :key="item" class="bg-amber-100">
      <img
        src="/imgs/background/welcome.webp"
        class="h-80 object-cover"
        alt=""
      />
    </SwipeItem>
    <template #indicator="{ active, total }">
      <div class="absolute bottom-0 right-0">
        <div class="backdrop-blur-lg !py-0.5 !px-2 text-white tracking-widest">
          <span class="text-lg font-semibold">{{ active + 1 }}/</span>
          <span class="text-sm">{{ total }}</span>
        </div>
      </div>
    </template>
  </Swipe>
</template>
