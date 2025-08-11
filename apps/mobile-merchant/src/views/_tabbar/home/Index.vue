<script setup lang="ts">
/**
 * @description 首页
 */
import HomeSearch from './modules/HomeSearch.vue';
import HomePromotion from './modules/HomePromotion.vue';
import HomeRecommendSupplier from './modules/HomeRecommendSupplier.vue';
import HomeProductList from './modules/HomeProductList.vue';
import HomeProductItem from './modules/HomeProductItem.vue';
import { useProductData, useHomeHandler } from './data';
import { vSlideIn } from '@frog/directives';
import { Popup } from 'vant';
import ProductDetail from '#/views/product/detail/Index.vue';

const { ProductItems } = useProductData();
const { handleProductClick, popup } = useHomeHandler();
</script>
<template>
  <div>
    <HomeSearch />
    <HomeRecommendSupplier />
    <HomePromotion />
    <HomeProductList>
      <template #items>
        <HomeProductItem
          @click="handleProductClick(item.id)"
          v-slideIn
          v-for="item in ProductItems"
          :item="item"
          :key="item.id"
        />
      </template>
    </HomeProductList>
    <Popup
      v-model:show="popup.show"
      position="bottom"
      :style="{ height: '96%' }"
      close-icon-position="top-left"
      closeable
      round
    >
      <ProductDetail :id="popup.id" />
    </Popup>
  </div>
</template>
