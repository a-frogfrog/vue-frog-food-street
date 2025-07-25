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
import { TopNavigationBar } from '#/components';

const { ProductItems } = useProductData();
</script>
<template>
  <div>
    <TopNavigationBar :is-absolute="true" />
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
