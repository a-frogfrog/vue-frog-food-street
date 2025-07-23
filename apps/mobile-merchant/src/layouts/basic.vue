<script setup lang="ts">
import { Page, Content, TabBar } from '@frog/common-ui';
import { useTabBar } from './use-tabbar';

const { activeName, item, handleClick } = useTabBar();
</script>

<template>
  <Page>
    <template #content>
      <Content />
    </template>
    <template #tabbar>
      <TabBar
        v-model:active="activeName"
        :items="item.items"
        @tab-bar-item-click="handleClick"
      />
    </template>
  </Page>
</template>
