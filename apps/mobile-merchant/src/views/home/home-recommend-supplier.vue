<script setup lang="ts">
import { ScrollHorizontally, SupplierAvatar } from '#/components';

function useSupplier() {
  const supplierItems = [
    {
      name: '供应商1',
      src: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    },
    {
      name: '供应商1',
      src: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    },
    {
      name: '供应商1',
      src: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    },
    {
      name: '供应商1',
      src: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    },
    {
      name: '供应商1',
      src: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    },
    {
      name: '供应商1',
      src: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    },
    {
      name: '供应商1',
      src: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/images/avatars/avatar-1.png',
    },
  ];
  return {
    supplierItems,
  };
}

const { supplierItems } = useSupplier();
</script>

<template>
  <ScrollHorizontally>
    <template #content>
      <div class="flex gap-4 !px-4">
        <template v-for="item in supplierItems" :key="item">
          <SupplierAvatar :src="item.src" :name="item.name" />
        </template>
      </div>
    </template>
  </ScrollHorizontally>
</template>
