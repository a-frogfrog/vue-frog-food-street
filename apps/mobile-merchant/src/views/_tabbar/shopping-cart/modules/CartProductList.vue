<script setup lang="ts">
import CartProductItem from './CartProductItem.vue';
import { useShoppingCart } from '../data';

const { productList, handleDelete } = useShoppingCart();
</script>
<template>
  <div class="!p-2 !px-4">
    <div class="bg-white rounded-md shadow-md !p-2">
      <CartProductItem
        @delete="handleDelete"
        v-for="item in productList"
        :item="item"
        :key="item.id"
      />
    </div>
  </div>
</template>
