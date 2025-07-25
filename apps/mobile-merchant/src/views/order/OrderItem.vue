<script setup lang="ts">
import { Icon } from '@frog/common-ui';
import { MoreIcon } from '@frog/icons';
import { ref, useTemplateRef } from 'vue';

interface Props {
  time: string;
  isOfficial: boolean;
  supplierName: string;
  supplierPhoto: string;
  orderId: string;
  productCount: number;
}

defineProps<Props>();

function useCollapse() {
  const isCollapse = ref(false);
  const productItem = useTemplateRef<HTMLDivElement>('productItem');

  const toggleCollapse = () => {
    isCollapse.value = !isCollapse.value;
    productItem.value!.style.height = isCollapse.value ? 'auto' : '0';
  };
  return {
    isCollapse,
    toggleCollapse,
  };
}

const { isCollapse, toggleCollapse } = useCollapse();
</script>
<template>
  <div class="border !my-4 border-gray-300 rounded-md">
    <div
      class="flex justify-between items-center border-b border-gray-300 !py-4 !px-4"
    >
      <span class="font-inter text-sm text-gray-500 font-semibold">{{
        time
      }}</span>
      <span
        class="bg-gray-100 text-sm font-semibold !px-2 rounded-md text-gray-500"
        >详情</span
      >
    </div>
    <div class="!p-4">
      <div @click="toggleCollapse" class="flex">
        <img
          class="h-20 w-20 rounded-md"
          :src="supplierPhoto"
          :alt="supplierName"
        />
        <div class="!pl-2 flex justify-end w-full">
          <div class="flex-1 truncate">
            <div class="flex gap-1 items-center truncate">
              <span
                class="bg-purple-100 text-purple-500 text-xs !px-1 rounded-sm"
                >{{ isOfficial ? '官方' : '个人' }}</span
              >
              <h2 class="text-xl font-semibold">
                {{ supplierName }}
              </h2>
            </div>
            <p class="!py-1 text-gray-500 text-sm">订单ID:{{ orderId }}</p>
          </div>
          <div class="flex">
            <span class="!px-2 text-gray-400">{{ productCount }} 项</span>
            <Icon
              :size="14"
              class="rotate-90 duration-150"
              :class="isCollapse ? ' rotate-[270deg]' : 'rotate-90'"
            >
              <MoreIcon />
            </Icon>
          </div>
        </div>
      </div>
      <div ref="productItem" class="product-item">
        <slot name="items"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-item {
  height: 0;
  overflow: hidden;
  interpolate-size: allow-keywords;
  transition: all 0.3s ease-in-out;
}
</style>
