<script setup lang="ts">
/**
 * @description 首页
 */
import HomeSearch from './HomeSearch.vue';
import HomePromotion from './HomePromotion.vue';
import HomeRecommendSupplier from './HomeRecommendSupplier.vue';
import HomeProductList from './HomeProductList.vue';
import HomeProductItem from './HomeProductItem.vue';
import { useProductData } from './data';
import {
  TopNavigationBar,
  TopNavigationBarItems
} from '#/components';
import { vSlideIn } from '@frog/directives';
import { ref } from 'vue';

function useSideNavigation() {
  const show = ref(false);
  const handleBarClick = () => {
    show.value = !show.value;
  };
  return { show, handleBarClick };
}
const { ProductItems } = useProductData();
const {  handleBarClick } = useSideNavigation();
</script>
<template>
  <div>
    <TopNavigationBar is-absolute>
      <template #items>
        <TopNavigationBarItems @bar-click="handleBarClick" />
      </template>
    </TopNavigationBar>
    <HomeSearch />
    <HomeRecommendSupplier />
    <HomePromotion />
    <HomeProductList>
      <template #items>
        <HomeProductItem
          v-slideIn
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
