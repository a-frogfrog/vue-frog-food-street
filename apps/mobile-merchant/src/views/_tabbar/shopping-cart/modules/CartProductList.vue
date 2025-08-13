<script setup lang="ts">
import { useShoppingCart } from '../data';
import CartProductItem from './CartProductItem.vue';
import CartSupplierInfo from './CartSupplierInfo.vue';

const { productList } = useShoppingCart();
</script>
<template>
  <div class="!px-4 flex-1 overflow-auto">
    <div
      class="bg-white rounded-md relative shadow-md !p-2 !pt-0 overflow-auto"
    >
      <template v-for="item in productList">
        <CartSupplierInfo :item="item" :id="item.id" />
        <CartProductItem v-for="i in item.products" :item="i" :key="item.id" />
      </template>
    </div>
  </div>
</template>
