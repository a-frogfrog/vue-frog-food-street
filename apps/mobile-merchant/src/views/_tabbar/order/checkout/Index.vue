<script setup lang="ts">
import ProductCard from './modules/ProductCard.vue';
import ProductPrice from './modules/ProductPrice.vue';
</script>

<template>
  <div class="bg-[#F5F5F7] !pb-4 !p-2 h-full relative">
    <ProductCard class="!my-2" />
    <ProductPrice class="!my-2" />
    <div class="absolute bottom-0">
      <div>123124</div>
    </div>
  </div>
</template>
