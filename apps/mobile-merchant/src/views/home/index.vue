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
import { TopNavigationBar, TopNavigationBarItems } from '#/components';
import { vSlideIn } from '@frog/directives';
import { useSideNavigation } from '#/components/side-navigation/useSideNavigation';

const { ProductItems } = useProductData();
const { toggleSideNavigation } = useSideNavigation();
</script>
<template>
  <div>
    <TopNavigationBar is-absolute>
      <template #items>
        <TopNavigationBarItems @bar-click="toggleSideNavigation" />
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
