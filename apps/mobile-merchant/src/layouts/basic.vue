<script setup lang="ts">
import { TabBar } from '@frog/common-ui';
import { useTabBar } from './data';
import { Page } from '#/components';

const { tabBarPage, active, item, handleClick } = useTabBar();
</script>

<template>
  <Page>
    <template #tabBar v-if="tabBarPage">
      <TabBar
        v-model:active="active"
        :items="item.items"
        @tab-bar-item-click="handleClick"
      />
    </template>
  </Page>
</template>
