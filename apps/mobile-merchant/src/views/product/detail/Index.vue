<script setup lang="ts">
import DetailCarouselChart from './modules/DetailCarouselChart.vue';
import DetailProductInfo from './modules/DetailProductInfo.vue';
import DetailSupplierInfo from './modules/DetailSupplierInfo.vue';
import DetailActionBar from './modules/DetailActionBar.vue';

interface Props {
  id?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="bg-[#F5F6FA] h-full relative">
    <DetailCarouselChart />
    <div class="!px-3">
      <DetailProductInfo />
      <DetailSupplierInfo />
    </div>
    <DetailActionBar />
  </div>
</template>
