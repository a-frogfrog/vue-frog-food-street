<script setup lang="ts">
/**
 * @description 首页推荐供应商
 */

import { ScrollHorizontally, SupplierAvatar } from '#/components';
import { useSupplierData } from './data';

const { supplierItems } = useSupplierData();
</script>

<template>
  <ScrollHorizontally>
    <template #content>
      <div class="flex gap-4 !px-4">
        <template
          v-for="item in supplierItems"
          :key="item"
        >
          <SupplierAvatar
            :src="item.src"
            :name="item.name"
          />
        </template>
      </div>
    </template>
  </ScrollHorizontally>
</template>
