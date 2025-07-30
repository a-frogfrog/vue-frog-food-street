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
        class="dark:bg-[rgba(255,255,255,0.1)] dark:text-[#E9E9E9]"
        v-model:active="active"
        :items="item.items"
        @tab-bar-item-click="handleClick"
      />
    </template>
    <template #>
      <SideNavigation />
    </template>
  </Page>
</template>
