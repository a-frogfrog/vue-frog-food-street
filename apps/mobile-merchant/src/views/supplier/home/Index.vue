<script setup lang="ts">
/**
 * @description merchant
 */
import HomeTopNavigation from './modules/HomeTopNavigation.vue';
import HomeBackground from './modules/HomeBackground.vue';
import HomeMerchantInfo from './modules/HomeMerchantInfo.vue';
import HomeSidebar from './modules/HomeSidebar.vue';
</script>

<template>
  <div>
    <div class="relative !pb-10">
      <HomeBackground />
      <HomeTopNavigation />
      <HomeMerchantInfo />
    </div>
    <HomeSidebar />
  </div>
</template>

<style>
.van-sidebar {
  border-start-end-radius: 8px;
  border-end-end-radius: 8px;
  transition: all 0.3s ease;
}
</style>
