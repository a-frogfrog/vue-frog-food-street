<script setup lang="ts">
import CartProductList from './modules/CartProductList.vue';
import CartActionBar from './modules/CartActionBar.vue';
</script>

<template>
  <div class="bg-[#F5F5F5] h-full flex flex-col justify-end !pb-28">
    <CartProductList />
    <CartActionBar />
  </div>
</template>
