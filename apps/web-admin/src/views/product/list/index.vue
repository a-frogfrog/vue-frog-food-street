<script setup lang="ts">
import { Container } from '@frog/common-ui';
import ProductSearch from './modules/ProductSearch.vue';
import ProductTable from './modules/ProductTable.vue';
</script>

<template>
  <Container>
    <ProductSearch />
    <ProductTable />
  </Container>
</template>
