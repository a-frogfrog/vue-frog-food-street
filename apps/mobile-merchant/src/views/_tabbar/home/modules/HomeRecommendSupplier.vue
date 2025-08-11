<script setup lang="ts">
/**
 * @description 首页推荐供应商
 */

import { ScrollHorizontally, SupplierAvatar } from '#/components';
import { useSupplierData, useHomeHandler } from '../data';

const { handleAvatarClick } = useHomeHandler();
const { supplierItems } = useSupplierData();
</script>

<template>
  <ScrollHorizontally>
    <template #content>
      <div class="flex gap-4 !px-4">
        <template v-for="item in supplierItems" :key="item">
          <SupplierAvatar
            @click="handleAvatarClick(item.id)"
            :src="item.src"
            :name="item.name"
          />
        </template>
      </div>
    </template>
  </ScrollHorizontally>
</template>
