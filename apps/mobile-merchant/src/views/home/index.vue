<script setup lang="ts">
/**
 * @description 首页
 */
import HomeSearch from './home-search.vue';
import HomePromotion from './home-promotion.vue';
import HomeRecommendSupplier from './home-recommend-supplier.vue';
import HomeProductList from './home-product-list.vue';
import HomeProductItem from './home-product-item.vue';
import { useProductData } from './data';

const { ProductItems } = useProductData();
console.log(ProductItems);
</script>
<template>
  <div>
    <HomeSearch />
    <HomeRecommendSupplier />
    <HomePromotion />
    <HomeProductList>
      <template #items>
        <HomeProductItem
          v-for="item in ProductItems"
          :key="item.id"
          :product-name="item.name"
          :img="item.img"
          :price="item.price"
          :is-official="item.isOfficial"
          :sold="item.sold"
          :stock="item.stock"
        />
      </template>
    </HomeProductList>
  </div>
</template>
