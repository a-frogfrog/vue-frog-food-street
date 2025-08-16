<script setup lang="ts">
import { TabBar, Page } from '#/components';
import { useTabBar } from './data';
const { tabBarPage, items, active, handleChange } = useTabBar();
</script>

<template>
  <Page :isTabBar="tabBarPage">
    <template #tabBar>
      <TabBar
        :active="active"
        :activeColor="'#e9e9e9'"
        :items="items"
        @change="handleChange"
      />
    </template>
    <template #main>
      <RouterView></RouterView>
    </template>
  </Page>
</template>
